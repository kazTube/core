import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductListPageResolver } from '../product-list/product-list-page/product-list-page-resolver';
import { CommentListResolver } from '../comment/comment-list/comment-list.resolver';
import { BasketPageResolver } from '../basket/basket-page/basket-page-resolver';
import { BasketPageFinalizePurchaseResolver } from '../basket/basket-page/basket-page-finalize-purchase.resolver';
import { CancelPurchaseResolver } from '../basket/mobile-cancel-purchase-page/cancel-purchase.resolver';
import { UserHomePageResolver } from '../home/user-home-page/user-home-page.resolver';
import { CommentResolver } from '../comment/insert-comment-form/comment-resolver.service';
import { ProductDetailResolver } from '../product-detail/product-detail-page/product-detail.resolver';
import { OrderListResolver } from '../order/order-list/order-list.resolver';
import { OrderDetailResolver } from '../order/order-detail-page/order-detail.resolver';
import { PharmacyPageResolver } from '../pharmacy/pharmacy-page/pharmacy-page.resolver';
import { SpecialOfferProductDetailResolver } from '../product-detail/product-detail-page/special-offer-product-detail.resolver';
import { DesktopProductSuggestionPageResolver } from '../product-detail/desktop-product-suggestion-page/desktop-product-suggestion-page.resolver';
import { PurchaseFeedbackResolver } from '../basket/purchase-feedback/purchase-feedback.resolver';
import { DesktopRoutes } from './desktop-routes';
import { MobileRoutes } from './mobile-routes';
import { AppStateService } from '../core/services/app-state.service';

@NgModule({
    imports: [
        RouterModule.forRoot([], { onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    providers: [
        ProductListPageResolver,
        ProductDetailResolver,
        OrderListResolver,
        OrderDetailResolver,
        CommentListResolver,
        BasketPageResolver,
        BasketPageFinalizePurchaseResolver,
        CancelPurchaseResolver,
        UserHomePageResolver,
        PharmacyPageResolver,
        CommentResolver,
        SpecialOfferProductDetailResolver,
        DesktopProductSuggestionPageResolver,
        PurchaseFeedbackResolver
    ]
})
export class AppRoutingModule {

    constructor(private appState: AppStateService, private router: Router) {
        if (appState.isMobile()) {
            router.resetConfig(MobileRoutes.routes);
        } else {
            router.resetConfig(DesktopRoutes.routes);
        }
    }
}
