import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {StarRatingModule} from 'angular-star-rating';
import {HomePageInfoComponent} from './home-page-info/home-page-info.component';
import {ProductOfferCardComponent} from './product-offer-card/product-offer-card.component';
import {BaseGeneralHomePageComponent} from './general-home-page/base-general-home-page.component';
import {BaseUserHomePageComponent} from './user-home-page/base-user-home-page.component';
import {ProductOfferCarouselComponent} from './product-offer-carousel/product-offer-carousel.component';


@NgModule({
    declarations: [
        BaseGeneralHomePageComponent,
        BaseUserHomePageComponent,
        HomePageInfoComponent,
        ProductOfferCardComponent,
        ProductOfferCarouselComponent
    ],
    imports: [
        SharedModule,
        StarRatingModule.forChild(),

    ],
    exports: [
        SharedModule,
        StarRatingModule,
        HomePageInfoComponent,
        ProductOfferCarouselComponent,
        ProductOfferCardComponent,
    ]

})
export class HomeModule {
}
