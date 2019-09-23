import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {StarRatingModule} from 'angular-star-rating';
import {BaseProductAttributesComponent} from './product-attributes/base-product-attributes.component';
import {BaseProductDescriptionCardComponent} from './product-description-card/base-product-description-card.component';
import {BaseProductDetailPageComponent} from './product-detail-page/base-product-detail-page.component';


@NgModule({
    declarations: [
        BaseProductAttributesComponent,
        BaseProductDescriptionCardComponent,
        BaseProductDetailPageComponent
    ],
    imports: [
        SharedModule,
        StarRatingModule.forChild(),

    ],
    exports: [
        SharedModule,
        StarRatingModule
    ]
})
export class ProductDetailModule {
}
