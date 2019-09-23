import {Injectable} from '@angular/core';
import {AddressDTO} from '../../dto/profile/AddressDTO';
import {UtilService} from '../../core/services/util.service';
import {UserProfileService} from '../user-profile.service';
import {StateDTO} from '../../dto/profile/StateDTO';
import {CityDTO} from '../../dto/profile/CityDTO';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AddressFormService {

    formAddress: AddressDTO = AddressDTO.emptyInstance();
    initAddress: AddressDTO = AddressDTO.emptyInstance();
    isAddressFormValid = false;
    stateList: StateDTO[] = [];
    cityList: CityDTO[] = [];
    addressList: AddressDTO[];

    constructor(
        public utilService: UtilService,
        public userProfileService: UserProfileService) {
    }

    hasAddressInfoChanged() {
        if (this.formAddress !== undefined && this.initAddress !== undefined) {
            return !(this.initAddress.cityId === this.formAddress.cityId
                && this.initAddress.stateId === this.formAddress.stateId
                && this.initAddress.addressText === this.formAddress.addressText
                && this.initAddress.postalCode === this.formAddress.postalCode
                && this.initAddress.latitude === this.formAddress.latitude
                && this.initAddress.longitude === this.formAddress.longitude
                && this.initAddress.receiverName === this.formAddress.receiverName
                && this.initAddress.receiverPhone === this.formAddress.receiverPhone
                && this.initAddress.unit === this.formAddress.unit
                && this.initAddress.plaqueNumber === this.formAddress.plaqueNumber
            );
        } else {
            return false;
        }
    }

    canSubmitAddressInfo() {
        return this.isAddressFormValid && this.hasAddressInfoChanged();
    }

    submitAddressInfo(isUpdate: boolean): Observable<any> {
        let addressInfo$;
        if (isUpdate) {
            addressInfo$ = this.userProfileService.updateAddress(this.formAddress);
        } else {
            addressInfo$ = this.userProfileService.addAddress(this.formAddress);
        }
        addressInfo$.subscribe((addedAddress: AddressDTO) => {
            if (this.addressList && addedAddress.addressId) {
                this.addressList.unshift(addedAddress);
                this.addressList = [...this.addressList];
            }
            this.setInitialState(this.formAddress);
        });
        return addressInfo$;
    }

    setInitialState(initAddress: AddressDTO, stateList?: StateDTO[], cityList?: CityDTO[]) {
        if (initAddress) {
            this.initAddress = AddressDTO.clone(initAddress);
            this.formAddress = AddressDTO.clone(initAddress);
        }
        this.stateList = stateList ? stateList : this.stateList;
        this.cityList = cityList ? cityList : this.cityList;
    }

    resetInitAddress() {
        this.initAddress = AddressDTO.emptyInstance();
    }
}
