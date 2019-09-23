import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilService } from '../core/services/util.service';
import { UserProfileService } from '../profile/user-profile.service';
import { AppStateService } from '../core/services/app-state.service';
import { RoutingService } from '../routing/routing.service';
import { Subject } from 'rxjs';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { flatMap, takeUntil } from 'rxjs/operators';
import { UserProfileDTO } from '../dto/profile/UserProfileDTO';


const TIMER_VALUE_IN_SECONDS = 59;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    @ViewChild('loginStepper') stepper: MatStepper;
    phone = new FormControl(
        undefined,
        [
            Validators.required,
            Validators.pattern('(\\+98|\\+\\u06F9\\u06F8|0|\\u06F0)?(9|\\u06F9)[\\u06F0-\\u06F90-9]{9}')
        ]);
    code = new FormControl(
        '',
        [
            Validators.minLength(4), Validators.maxLength(4)
        ]);

    currentStepIndex = 0;
    resendCodeTimer = TIMER_VALUE_IN_SECONDS;
    isWaitingForCode = false;
    isWaitingForCodeVerification = false;
    resendCodeIntervalRef: any;
    isResendCodeEnable = false;

    nextRouteURL: string;

    private unsubscribe$ = new Subject();

    constructor(public loginService: LoginService,
        public userProfileService: UserProfileService,
        public appStateService: AppStateService,
        public routingService: RoutingService,
        public router: Router,
        public route: ActivatedRoute,
        public utilService: UtilService) {
    }

    ngOnInit() {
        this.stepper.selectionChange.pipe(takeUntil(this.unsubscribe$))
            .subscribe((stepperSelectionEvent: StepperSelectionEvent) => {
                this.currentStepIndex = stepperSelectionEvent.selectedIndex;
            });
        this.code.valueChanges.pipe(takeUntil(this.unsubscribe$))
            .subscribe(value => {
                if (value && value.length === 4) {
                    this.verifyLoginCode();
                }
            });
        this.loginService.redirectUrl = this.routingService.getPreviousUrl();
    }

    sendOnEnter(event: KeyboardEvent) {
        if (event.key === 'Enter' && this.phone.valid) {
            this.sendLoginCode();
        }
    }

    sendLoginCode() {
        this.isWaitingForCode = true;
        this.loginService.sendLoginCode(this.utilService.convertPersianNumberToEnglishNumber(this.phone.value))
            .subscribe(() => {
                this.stepper.next();
                this.startResendCodeTimer();
                this.isWaitingForCode = false;
            }, () => this.isWaitingForCode = false);
    }

    verifyLoginCode() {
        this.isWaitingForCodeVerification = true;
        this.clearResendCodeTimer();
        this.loginService.verifyLoginCode(
            this.utilService.convertPersianNumberToEnglishNumber(this.phone.value),
            this.utilService.convertPersianNumberToEnglishNumber(this.code.value)
        ).pipe(
            flatMap(token => {
                this.loginService.saveToken(token);
                return this.userProfileService.getUserProfile();
            })
        ).subscribe((userProfile: UserProfileDTO) => {
            this.isWaitingForCodeVerification = false;
            this.loginService.publishUserLoggedInEvent();
            if (userProfile.hasProfile && userProfile.addressList.length > 0) {
                this.router.navigateByUrl(this.loginService.redirectUrl);
            } else {
                if (!userProfile.hasProfile) {
                    this.nextRouteURL = '/profile/register';
                } else if (userProfile.addressList === undefined || userProfile.addressList.length === 0) {
                    this.nextRouteURL = '/profile/register/address';
                }
                this.stepper.next();
            }
        }, () => {
            this.loginService.logoutUser();
            this.isWaitingForCodeVerification = false;
        });
    }

    resendLoginCode() {
        this.loginService.sendLoginCode(this.phone.value).subscribe(() => {
            this.resendCodeTimer = TIMER_VALUE_IN_SECONDS;
            this.startResendCodeTimer();
        }, () => {
            this.resendCodeTimer = TIMER_VALUE_IN_SECONDS;
            this.startResendCodeTimer();
        });
    }

    editPhoneNumber() {
        this.clearResendCodeTimer();
        this.resendCodeTimer = TIMER_VALUE_IN_SECONDS;
        this.stepper.previous();
    }

    private startResendCodeTimer() {
        this.isResendCodeEnable = false;
        this.resendCodeIntervalRef = setInterval(() => {
            if (this.resendCodeTimer > 0) {
                this.resendCodeTimer--;
            } else {
                this.isResendCodeEnable = true;
                this.clearResendCodeTimer();
            }
        }, 1000);
    }

    private clearResendCodeTimer() {
        clearInterval(this.resendCodeIntervalRef);
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

}
