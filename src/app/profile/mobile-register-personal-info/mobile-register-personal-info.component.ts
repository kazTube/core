import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserProfileService} from '../user-profile.service';
import {UtilService} from '../../core/services/util.service';
import {PersonalInfoFormService} from '../personal-info-form/personal-info-form.service';
import {LoginService} from '../../login/login.service';

@Component({
    selector: 'app-mobile-personal-info-form',
    templateUrl: './mobile-register-personal-info.component.html',
    styleUrls: ['./mobile-register-personal-info.component.scss']
})
export class MobileRegisterPersonalInfoComponent {

    isLoading = false;
    isRuleConfirmed = false;

    constructor(public route: ActivatedRoute,
                public router: Router,
                public userProfileService: UserProfileService,
                public utilService: UtilService,
                public personalInfoFormService: PersonalInfoFormService,
                public loginService: LoginService) {
    }

    isConfirmButtonDisabled(): boolean {
        return !this.personalInfoFormService.isPersonalFormValid
            || !this.isRuleConfirmed
            || this.isLoading;
    }

    submitPersonalInfo() {
        this.isLoading = true;
        this.personalInfoFormService.submitPersonalInfo().subscribe(() => {
            this.userProfileService.getUserProfile().subscribe(userProfile => {
                this.isLoading = false;
                if (userProfile.addressList === undefined || userProfile.addressList.length === 0) {
                    this.router.navigateByUrl('/profile/address/add');
                } else {
                    this.router.navigateByUrl(this.loginService.redirectUrl);
                }
            }, () => this.isLoading = false);
        });
    }

}
