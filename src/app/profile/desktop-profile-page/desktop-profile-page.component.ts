import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AddressFormService} from '../address-info-form/address-form.service';
import {PersonalInfoFormService} from '../personal-info-form/personal-info-form.service';
import {OrderListService} from '../../order/order-list/order-list.service';
import {NotificationService} from '../../shared/components/notification/notification.service';

@Component({
    selector: 'app-desktop-profile-page',
    templateUrl: './desktop-profile-page.component.html',
    styleUrls: ['./desktop-profile-page.component.scss']
})
export class DesktopProfilePageComponent implements OnInit {

    selectedRoute = 'personal-info';
    isUpdatingAvatar = false;

    constructor(
        public router: Router,
        public route: ActivatedRoute,
        public personalInfoFormService: PersonalInfoFormService,
        public addressFormService: AddressFormService,
        public orderListService: OrderListService,
        public notificationService: NotificationService,
    ) {
        this.orderListService.orderList = this.route.snapshot.data.orderList;
        this.orderListService.orderOffset = 0;
        this.orderListService.hasMoreOrder = this.orderListService.orderList.length >= this.orderListService.orderListPageSize;
        this.addressFormService.addressList = this.route.snapshot.data.userProfile.addressList;
    }

    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.personalInfoFormService.setInitialState(data.userProfile);
            this.addressFormService.setInitialState(
                undefined,
                data.stateAndCity.stateList,
                data.stateAndCity.cityList
            );
        });
        this.route.url.subscribe(() => {
            if (this.route.snapshot.firstChild) {
                this.selectedRoute = this.route.snapshot.firstChild.routeConfig.path;
            }
        });
    }

    get username(): string {
        return this.personalInfoFormService.formPersonalInfo.firstName + ' ' +
            this.personalInfoFormService.formPersonalInfo.lastName;
    }

    changeRoute(route: any) {
        this.router.navigate([route.value], {relativeTo: this.route});
    }

    submitAvatar(selectedAvatar: string) {
        this.isUpdatingAvatar = true;
        this.personalInfoFormService.submitAvatar(selectedAvatar)
            .subscribe(() => {
                this.isUpdatingAvatar = false;
                this.notificationService.successMessage('آواتار با موفقیت ثبت شد.');
            }, () => this.isUpdatingAvatar = false);
    }
}
