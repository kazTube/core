import {NgModule} from '@angular/core';
import {MobileBasketItemCardComponent} from './basket-item-card/mobile-basket-item-card/mobile-basket-item-card.component';
import {BasketModule} from './basket.module';
import {MobileBasketItemListComponent} from './basket-item-list/mobile-basket-item-list/mobile-basket-item-list.component';
import {MobileBasketPageComponent} from './basket-page/mobile-basket-page/mobile-basket-page.component';
import {MobileFinalizePurchaseComponent} from './finalize-purchase/mobile-finalize-purchase/mobile-finalize-purchase.component';
import {RouterModule, Routes} from '@angular/router';
import {CancelPurchaseResolver} from './mobile-cancel-purchase-page/cancel-purchase.resolver';
import {AuthenticationGuard} from '../routing/authentication.guard';
import {BasketPageFinalizePurchaseResolver} from './basket-page/basket-page-finalize-purchase.resolver';
import {BasketPageResolver} from './basket-page/basket-page-resolver';
import {MobileCancelPurchasePageComponent} from './mobile-cancel-purchase-page/mobile-cancel-purchase-page.component';
import {PurchaseFeedbackComponent} from './purchase-feedback/purchase-feedback.component';
import {PurchaseFeedbackResolver} from './purchase-feedback/purchase-feedback.resolver';
import {SharedModule} from '../shared/shared.module';


const routes: Routes = [

    {
        path: 'order/feedback/:id',
        component: PurchaseFeedbackComponent,
        resolve: {preDefinedCommentList: PurchaseFeedbackResolver},
        data: {animation: 'basket-stepper-cancel-purchase'},
        canActivate: [AuthenticationGuard]

    },
    {
        path: 'purchase/cancel/:id',
        component: MobileCancelPurchasePageComponent,
        resolve: {preDefinedCommentList: CancelPurchaseResolver},
        data: {animation: 'basket-stepper-cancel-purchase'},
        canActivate: [AuthenticationGuard]

    },
    {
        path: 'finalize/purchase/:id',
        component: MobileBasketPageComponent,
        data: {showSearchBoxInHeader: false, animation: 'basket-stepper-finalize-purchase'},
        resolve: {resolvedData: BasketPageFinalizePurchaseResolver},
        canActivate: [AuthenticationGuard]

    },
    {
        path: '',
        component: MobileBasketPageComponent,
        resolve: {resolvedData: BasketPageResolver},
        data: {animation: 'basket-stepper'},
        runGuardsAndResolvers: 'always'
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];

@NgModule({
    declarations: [
        MobileBasketItemCardComponent,
        MobileBasketItemListComponent,
        MobileBasketPageComponent,
        MobileFinalizePurchaseComponent,
        MobileCancelPurchasePageComponent],
    imports: [
        BasketModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],

})
export class MobileBasketModule {
}
