import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {AgmCoreModule} from '@agm/core';
import {StarRatingModule} from 'angular-star-rating';
import {PharmacyInfoCardComponent} from './pharmacy-info-card/pharmacy-info-card.component';
import {ContactSupportPopUpComponent} from './contact-support-pop-up/contact-support-pop-up.component';
import {SubscribeToPharmacyPopUpComponent} from './subscribe-to-pharmacy-pop-up/subscribe-to-pharmacy-pop-up.component';
import {ContactSupportPageComponent} from './contact-support-page/contact-support-page.component';
import {SubscriptionCompletedPageComponent} from './subscription-completed-page/subscription-completed-page.component';
import {BasePharmacyPageComponent} from './pharmacy-page/base-pharmacy-page.component';


@NgModule({
    declarations: [
        BasePharmacyPageComponent,
        PharmacyInfoCardComponent,
        ContactSupportPopUpComponent,
        ContactSupportPageComponent,
        SubscribeToPharmacyPopUpComponent,
        SubscriptionCompletedPageComponent
    ],
    imports: [
        SharedModule,
        AgmCoreModule,
        StarRatingModule.forChild(),
    ],
    exports: [
        AgmCoreModule,
        StarRatingModule,
        SharedModule,
        PharmacyInfoCardComponent,
        ContactSupportPopUpComponent,
        ContactSupportPageComponent,
        SubscribeToPharmacyPopUpComponent,
        SubscriptionCompletedPageComponent
    ],
    entryComponents: [
        ContactSupportPopUpComponent,
        SubscribeToPharmacyPopUpComponent,
    ]
})
export class PharmacyModule {
}
