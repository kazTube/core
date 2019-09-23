import {Component} from '@angular/core';
import {PersonalInfoFormService} from '../personal-info-form/personal-info-form.service';
import {UserProfileService} from '../user-profile.service';
import {NotificationService} from '../../shared/components/notification/notification.service';

@Component({
    template: ''
})
export class BaseProfilePersonalInfoComponent {

    isLoading = false;

    constructor(public personalInfoFormService: PersonalInfoFormService,
                public userProfileService: UserProfileService,
                public notificationService: NotificationService) {
    }

    submitPersonalInfo() {
        this.isLoading = true;
        this.personalInfoFormService.submitPersonalInfo().subscribe(() => {
            this.isLoading = false;
            this.userProfileService.getUserProfile();
            this.notificationService.successMessage('تغییرات با موفقیت اعمال شد.');
        }, () => this.isLoading = false);
    }

    isConfirmButtonDisabled() {
        return !this.personalInfoFormService.canSubmitPersonalInfo()
            || this.isLoading;
    }
}
