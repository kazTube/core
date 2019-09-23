import {Component} from '@angular/core';
import {UserProfileService} from '../user-profile.service';
import {NotificationService} from '../../shared/components/notification/notification.service';

@Component({
    template: ''
})
export class BaseProfileAddressListComponent {

    constructor(public userProfileService: UserProfileService,
                public notificationService: NotificationService) {
    }

    setDefaultAddress(addressId: number) {
        this.userProfileService.setDefaultAddress(addressId)
            .subscribe((result: boolean) => {
                if (result) {
                    this.notificationService.successMessage('آدرس پیش فرض ثبت شد.');
                } else {
                    this.notificationService.errorMessage('خطا در ثبت آدرس پیش فرض');
                }
            });
    }
}
