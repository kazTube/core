import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NguCarouselModule } from '@ngu/carousel';
import { LoadingComponent } from './components/loading/loading.component';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { ImgWithLoadingComponent } from './components/img-with-loading/img-with-loading.component';
import { RouterModule } from '@angular/router';
import { CaptureScrollEventDirective } from './directives/capture-scroll-event/capture-scroll-event.directive';
import { DpFormFieldDirective } from './directives/dp-form-field/dp-form-field.directive';
import { DpSelectDirective } from './directives/dp-select/dp-select.directive';
import { FriendlyPricePipe } from './pipe/friendly-price-pipe/friendly-price.pipe';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { NotificationComponent } from './components/notification/notification.component';
import { DpButtonDirective } from './directives/dp-button/dp-button.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { ProductSummaryCardComponent } from './components/product-summary-card/product-summary-card.component';
import { StarRatingModule } from 'angular-star-rating';
import { ConfirmPopUpComponent } from './components/confirm-pop-up/confirm-pop-up.component';
import { AddNewProductCardComponent } from './components/add-new-product-card/add-new-product-card.component';
import { OrderProviderCardComponent } from './components/order-provider-card/order-provider-card.component';
import { RateStarBarComponent } from './components/rate-star-bar/rate-star-bar.component';
import { MapPopUpComponent } from './components/map-pop-up/map-pop-up.component';
import { AgmCoreModule } from '@agm/core';
import { CaptureClickEventDirective } from './directives/capture-click-event/capture-click-event.directive';
import { BaseAddressCardComponent } from './components/address-card/base-address-card.component';
import { BaseAddressListComponent } from './components/address-list/base-address-list.component';
import { BaseOrderProductSummaryCardComponent } from './components/order-product-summary-card/base-order-product-summary-card.component';
import { DesktopBreadcrumbComponent } from './components/desktop-breadcrumb/desktop-breadcrumb.component';
import { DesktopAddressCardComponent } from './components/address-card/desktop-address-card/desktop-address-card.component';
import { DesktopAddressListComponent } from './components/address-list/desktop-address-list/desktop-address-list.component';
import { DesktopOrderProductSummaryCardComponent } from './components/order-product-summary-card/desktop-order-product-summary-card/desktop-order-product-summary-card.component';
import { MobileAddressCardComponent } from './components/address-card/mobile-address-card/mobile-address-card.component';
import { MobileAddressListComponent } from './components/address-list/mobile-address-list/mobile-address-list.component';
import { MobileBillComponent } from './components/mobile-bill/mobile-bill.component';
import { MobileOrderProductSummaryCardComponent } from './components/order-product-summary-card/mobile-order-product-summary-card/mobile-order-product-summary-card.component';
import { MobileSelectSortByPopUpComponent } from './components/mobile-select-sort-by-pop-up/mobile-select-sort-by-pop-up.component';

@NgModule({
    declarations: [
        LoadingComponent,
        ImgWithLoadingComponent,
        CaptureScrollEventDirective,
        CaptureClickEventDirective,
        DpFormFieldDirective,
        DpSelectDirective,
        SearchBoxComponent,
        FriendlyPricePipe,
        NotificationComponent,
        DpButtonDirective,
        ProductCarouselComponent,
        ProductSummaryCardComponent,
        AddNewProductCardComponent,
        ConfirmPopUpComponent,
        OrderProviderCardComponent,
        RateStarBarComponent,
        MapPopUpComponent,
        BaseAddressCardComponent,
        BaseAddressListComponent,
        BaseOrderProductSummaryCardComponent,
        DesktopBreadcrumbComponent,
        DesktopAddressCardComponent,
        DesktopAddressListComponent,
        DesktopOrderProductSummaryCardComponent,
        MobileAddressCardComponent,
        MobileAddressListComponent,
        MobileBillComponent,
        MobileOrderProductSummaryCardComponent,
        MobileSelectSortByPopUpComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        NguCarouselModule,
        MatProgressButtonsModule,
        RouterModule,
        FlexLayoutModule,
        StarRatingModule.forChild(),
        AgmCoreModule

    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CaptureScrollEventDirective,
        CaptureClickEventDirective,
        MaterialModule,
        NguCarouselModule,
        MatProgressButtonsModule,
        ImgWithLoadingComponent,
        LoadingComponent,
        DpFormFieldDirective,
        DpSelectDirective,
        FriendlyPricePipe,
        SearchBoxComponent,
        RouterModule,
        NotificationComponent,
        DpButtonDirective,
        FlexLayoutModule,
        ConfirmPopUpComponent,
        OrderProviderCardComponent,
        RateStarBarComponent,
        MapPopUpComponent,
        AddNewProductCardComponent,
        ProductCarouselComponent,
        ProductSummaryCardComponent,
        ConfirmPopUpComponent,
        OrderProviderCardComponent,
        RateStarBarComponent,
        MapPopUpComponent,
        DesktopBreadcrumbComponent,
        DesktopAddressCardComponent,
        DesktopAddressListComponent,
        DesktopOrderProductSummaryCardComponent,
        MobileAddressCardComponent,
        MobileAddressListComponent,
        MobileBillComponent,
        MobileOrderProductSummaryCardComponent,
        MobileSelectSortByPopUpComponent
    ],
    entryComponents: [
        NotificationComponent,
        ConfirmPopUpComponent,
        AddNewProductCardComponent,
        MapPopUpComponent

    ]
})
export class SharedModule {
}
