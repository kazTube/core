import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {MapButtonComponent} from './map-button/map-button.component';
import {RulesComponent} from './rules/rules.component';
import {AddressInfoFormComponent} from './address-info-form/address-info-form.component';
import {PersonalInfoFormComponent} from './personal-info-form/personal-info-form.component';
import {AvatarButtonComponent} from './avatar-button/avatar-button.component';
import {AvatarSelectionPopupComponent} from './avatar-selection-popup/avatar-selection-popup.component';
import {BaseProfileAddressListComponent} from './profile-address-list/base-profile-address-list.component';
import {BaseProfilePersonalInfoComponent} from './profile-personal-info/base-profile-personal-info.component';
import {BaseAddAddressPageComponent} from './add-address-page/base-add-address-page.component';


@NgModule({
    declarations: [
        MapButtonComponent,
        RulesComponent,
        AddressInfoFormComponent,
        PersonalInfoFormComponent,
        AvatarButtonComponent,
        AvatarSelectionPopupComponent,
        BaseProfileAddressListComponent,
        BaseProfilePersonalInfoComponent,
        BaseAddAddressPageComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    exports: [
        CommonModule,
        MapButtonComponent,
        RulesComponent,
        AddressInfoFormComponent,
        PersonalInfoFormComponent,
        AvatarButtonComponent,
        AvatarSelectionPopupComponent
    ],
    entryComponents: [AvatarSelectionPopupComponent]
})
export class ProfileModule {
}
