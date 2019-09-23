import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AddressDTO} from '../../dto/profile/AddressDTO';
import {AddressFormService} from '../address-info-form/address-form.service';
import {AddressInfoFormComponent} from '../address-info-form/address-info-form.component';
import {RoutingService} from '../../routing/routing.service';
import {LoginService} from '../../login/login.service';

@Component({
    template: ''
})
export class BaseAddAddressPageComponent implements OnInit {

    title = 'ثبت آدرس جدید';
    submitButtonText = 'ثبت آدرس';
    isLoading = false;
    isEditForm = false;
    isRegisterForm = false;

    constructor(public route: ActivatedRoute,
                public router: Router,
                public routingService: RoutingService,
                public loginService: LoginService,
                public addressFormService: AddressFormService) {
    }

    ngOnInit() {
        let addressToEdit = AddressDTO.emptyInstance();
        if (this.route.routeConfig.path === 'address') {
            this.isRegisterForm = true;
            this.title = 'اطلاعات آدرس';
            this.submitButtonText = 'ثبت آدرس و تایید نهایی';
        } else if (this.route.routeConfig.path === 'edit/:id') {
            this.isEditForm = true;
            this.title = 'ویرایش آدرس';
            this.submitButtonText = 'ثبت تغییرات';
            const addressIdToEdit = parseInt(this.route.snapshot.paramMap.get('id'), 10);
            if (addressIdToEdit) {
                addressToEdit = this.route.snapshot.data.userProfile.addressList
                    .filter((address: AddressDTO) => address.addressId === addressIdToEdit)[0];
            }
        }
        this.addressFormService.setInitialState(
            addressToEdit,
            this.route.snapshot.data.stateAndCity.stateList,
            this.route.snapshot.data.stateAndCity.cityList
        );
    }


    submitAddressForm(addressForm?: AddressInfoFormComponent) {
        this.isLoading = true;
        this.addressFormService.submitAddressInfo(this.isEditForm)
            .subscribe(() => {
                this.isLoading = false;
                if (addressForm) {
                    addressForm.resetForm();
                }
                this.navigateToAppropriatePage();
            }, () => this.isLoading = false);
    }

    isConfirmButtonDisabled(): boolean {
        return !this.addressFormService.canSubmitAddressInfo()
            || this.isLoading;
    }

    navigateToAppropriatePage() {
        if (this.isRegisterForm) {
            this.router.navigateByUrl(this.loginService.redirectUrl);
        } else if (this.routingService.getPreviousUrl().indexOf('basket') >= 0) {
            this.routingService.navigateBackWithExtra({queryParams: {'step': 2}});
        } else {
            this.routingService.navigateBack();
        }
    }

}
