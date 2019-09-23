import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NotificationService} from '../../../shared/components/notification/notification.service';
import {PersonalInfoFormService} from '../../personal-info-form/personal-info-form.service';
import {BaseProfilePersonalInfoComponent} from '../base-profile-personal-info.component';
import {UserProfileService} from '../../user-profile.service';
import {RoutingService} from '../../../routing/routing.service';

@Component({
    selector: 'app-mobile-user-profile',
    templateUrl: './mobile-profile-personal-info.component.html',
    styleUrls: ['./mobile-profile-personal-info.component.scss']
})
export class MobileProfilePersonalInfoComponent extends BaseProfilePersonalInfoComponent implements OnInit {

    constructor(public route: ActivatedRoute,
                public userProfileService: UserProfileService,
                public notificationService: NotificationService,
                public personalInfoFormService: PersonalInfoFormService,
                public routingService: RoutingService) {
        super(personalInfoFormService, userProfileService, notificationService);
    }

    ngOnInit() {
        this.route.data
            .subscribe((data) => {
                this.personalInfoFormService.setInitialState(data.userProfile);
            });
    }
}
