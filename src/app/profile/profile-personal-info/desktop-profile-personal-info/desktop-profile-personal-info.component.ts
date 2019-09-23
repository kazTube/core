import {Component} from '@angular/core';
import {UserProfileService} from '../../user-profile.service';
import {NotificationService} from '../../../shared/components/notification/notification.service';
import {PersonalInfoFormService} from '../../personal-info-form/personal-info-form.service';
import {BaseProfilePersonalInfoComponent} from '../base-profile-personal-info.component';

@Component({
    selector: 'app-desktop-user-profile',
    templateUrl: './desktop-profile-personal-info.component.html',
    styleUrls: ['./desktop-profile-personal-info.component.scss']
})
export class DesktopProfilePersonalInfoComponent extends BaseProfilePersonalInfoComponent {


    constructor(public userProfileService: UserProfileService,
                public personalInfoFormService: PersonalInfoFormService,
                public notificationService: NotificationService) {
        super(personalInfoFormService, userProfileService, notificationService);
    }
}
