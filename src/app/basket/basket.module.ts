import {NgModule} from '@angular/core';
import {BasketStepperControlComponent} from './basket-stepper-control/basket-stepper-control.component';
import {SharedModule} from '../shared/shared.module';
import {UserHasOpenOrderPopUpComponent} from './user-has-open-order-pop-up/user-has-open-order-pop-up.component';
import {InquiryFromPharmacyComponent} from './inquiry-from-pharmacy/inquiry-from-pharmacy.component';
import {CancelPurchaseComponent} from './cancel-purchase/cancel-purchase.component';
import {PurchaseFeedbackComponent} from './purchase-feedback/purchase-feedback.component';
import {BaseBasketItemCardComponent} from './basket-item-card/base-basket-item-card.component';
import {BaseBasketItemListComponent} from './basket-item-list/base-basket-item-list.component';
import {BaseFinalizePurchaseComponent} from './finalize-purchase/base-finalize-purchase.component';
import {BaseBasketPageComponent} from './basket-page/base-basket-page.component';
import {LottieAnimationViewModule} from 'ng-lottie';


@NgModule({
    declarations: [
        BaseBasketItemCardComponent,
        BaseBasketItemListComponent,
        BaseFinalizePurchaseComponent,
        BaseBasketPageComponent,
        BasketStepperControlComponent,
        InquiryFromPharmacyComponent,
        UserHasOpenOrderPopUpComponent,
        CancelPurchaseComponent,
        PurchaseFeedbackComponent
    ],
    imports: [
        SharedModule,
        LottieAnimationViewModule
    ],
    exports: [
        SharedModule,
        BasketStepperControlComponent,
        InquiryFromPharmacyComponent,
        UserHasOpenOrderPopUpComponent,
        CancelPurchaseComponent,
        PurchaseFeedbackComponent
    ],
    entryComponents: [
        UserHasOpenOrderPopUpComponent
    ]
})
export class BasketModule {
}
