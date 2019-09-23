import {Component, ViewChild} from '@angular/core';
import {AddressFormService} from '../../address-info-form/address-form.service';
import {AddressInfoFormComponent} from '../../address-info-form/address-info-form.component';
import {BaseProfileAddressListComponent} from '../base-profile-address-list.component';
import {UserProfileService} from '../../user-profile.service';
import {NotificationService} from '../../../shared/components/notification/notification.service';

@Component({
    selector: 'app-desktop-profile-address-list',
    templateUrl: './desktop-profile-address-list.component.html',
    styleUrls: ['./desktop-profile-address-list.component.scss']
})
export class DesktopProfileAddressListComponent extends BaseProfileAddressListComponent {

    @ViewChild('addressForm') addressForm: AddressInfoFormComponent;
    isLoading = false;

    constructor(public addressFormService: AddressFormService,
                public userProfileService: UserProfileService,
                public notificationService: NotificationService) {
        super(userProfileService, notificationService);
    }

    submitAddressInfo() {
        this.isLoading = true;
        this.addressFormService.submitAddressInfo(false).subscribe(() => {
            this.isLoading = false;
            if (this.addressForm) {
                this.addressForm.resetForm();
            }
        }, () => this.isLoading = false);
    }

    isConfirmButtonDisabled(): boolean {
        return this.isLoading
            || !this.addressFormService.canSubmitAddressInfo();
    }
}
