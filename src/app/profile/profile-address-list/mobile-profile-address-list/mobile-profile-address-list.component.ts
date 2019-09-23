import {Component, OnInit} from '@angular/core';
import {BaseProfileAddressListComponent} from '../base-profile-address-list.component';
import {ActivatedRoute} from '@angular/router';
import {AddressDTO} from '../../../dto/profile/AddressDTO';
import {RoutingService} from '../../../routing/routing.service';
import {UserProfileService} from '../../user-profile.service';
import {NotificationService} from '../../../shared/components/notification/notification.service';

@Component({
    selector: 'app-profile-user-address-list',
    templateUrl: './mobile-profile-address-list.component.html',
    styleUrls: ['./mobile-profile-address-list.component.scss']
})
export class MobileProfileAddressListComponent extends BaseProfileAddressListComponent implements OnInit {
    addressList: AddressDTO[];

    constructor(public route: ActivatedRoute,
                public routingService: RoutingService,
                public userProfileService: UserProfileService,
                public notificationService: NotificationService) {
        super(userProfileService, notificationService);
    }

    ngOnInit() {
        this.route.data
            .subscribe((data) => {
                this.addressList = data.userProfile.addressList;
            });
    }
}
