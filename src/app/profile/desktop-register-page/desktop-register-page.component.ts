import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserProfileService} from '../user-profile.service';
import {forkJoin, Subject} from 'rxjs';
import {AddressFormService} from '../address-info-form/address-form.service';
import {PersonalInfoFormService} from '../personal-info-form/personal-info-form.service';
import {takeUntil} from 'rxjs/operators';
import {LoginService} from '../../login/login.service';

@Component({
    selector: 'app-desktop-register-page',
    templateUrl: './desktop-register-page.component.html',
    styleUrls: ['./desktop-register-page.component.scss']
})
export class DesktopRegisterPageComponent implements OnInit, OnDestroy {

    isLoading = false;
    isRuleConfirmed = false;
    unsubscribe$: Subject<void> = new Subject();

    constructor(public route: ActivatedRoute,
                public router: Router,
                public userProfileService: UserProfileService,
                public addressFormService: AddressFormService,
                public personalInfoFormService: PersonalInfoFormService,
                public loginService: LoginService) {
    }

    ngOnInit() {
        this.route.data
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((data) => {
                this.addressFormService.setInitialState(
                    undefined,
                    data.stateAndCity.stateList,
                    data.stateAndCity.cityList
                );
            });
    }

    submitUserInfo() {
        this.isLoading = true;
        forkJoin(
            this.personalInfoFormService.submitPersonalInfo(),
            this.addressFormService.submitAddressInfo(false)
        ).pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
                this.isLoading = false;
                this.router.navigateByUrl(this.loginService.redirectUrl);
            }, () => {
                this.isLoading = false;
                this.addressFormService.resetInitAddress();
                this.personalInfoFormService.resetInitPersonalInfo();
            });
    }

    isConfirmButtonDisabled(): boolean {
        return !this.personalInfoFormService.canSubmitPersonalInfo()
            || !this.isRuleConfirmed
            || this.isLoading
            || !this.addressFormService.canSubmitAddressInfo();
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
