import { NgModule } from '@angular/core';
import { DesktopBasketItemCardComponent } from './basket-item-card/desktop-basket-item-card/desktop-basket-item-card.component';
import { DesktopBasketPageComponent } from './basket-page/desktop-basket-page/desktop-basket-page.component';
import { BasketModule } from './basket.module';
import { RouterModule, Routes } from '@angular/router';
import { BasketPageResolver } from './basket-page/basket-page-resolver';
import { DesktopBasketItemListComponent } from './basket-item-list/desktop-basket-item-list/desktop-basket-item-list.component';
import { DesktopFinalizePurchaseComponent } from './finalize-purchase/desktop-finalize-purchase/desktop-finalize-purchase.component';
import { BasketPageFinalizePurchaseResolver } from './basket-page/basket-page-finalize-purchase.resolver';
import { AuthenticationGuard } from '../routing/authentication.guard';
import { DesktopCancelPurchasePopupComponent } from './desktop-cancel-purchase-popup/desktop-cancel-purchase-popup.component';
import { CancelPurchaseResolver } from './mobile-cancel-purchase-page/cancel-purchase.resolver';
import { PurchaseFeedbackComponent } from './purchase-feedback/purchase-feedback.component';
import { PurchaseFeedbackResolver } from './purchase-feedback/purchase-feedback.resolver';
import { DesktopOrderModule } from '../order/desktop-order.module';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [

    {
        path: 'order/feedback/:id',
        component: PurchaseFeedbackComponent,
        resolve: { preDefinedCommentList: PurchaseFeedbackResolver },
        data: { animation: 'basket-stepper-cancel-purchase' },
        canActivate: [AuthenticationGuard]

    },
    {
        path: 'finalize/purchase/:id',
        component: DesktopBasketPageComponent,
        data: { showSearchBoxInHeader: false, animation: 'basket-stepper-finalize-purchase' },
        resolve: {
            resolvedData: BasketPageFinalizePurchaseResolver,
            preDefinedCommentList: CancelPurchaseResolver
        },
        canActivate: [AuthenticationGuard]

    },
    {
        path: '',
        component: DesktopBasketPageComponent,
        resolve: { resolvedData: BasketPageResolver },
        data: { animation: 'basket-stepper' },
        runGuardsAndResolvers: 'always'
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];

@NgModule({
    declarations: [
        DesktopBasketItemCardComponent,
        DesktopBasketPageComponent,
        DesktopBasketItemListComponent,
        DesktopFinalizePurchaseComponent,
        DesktopCancelPurchasePopupComponent],
    imports: [
        BasketModule,
        SharedModule,
        DesktopOrderModule,
        RouterModule.forChild(routes)
    ],
    entryComponents: [
        DesktopCancelPurchasePopupComponent
    ]
})
export class DesktopBasketModule {
}
