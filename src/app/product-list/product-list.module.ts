import {NgModule} from '@angular/core';
import {StarRatingModule} from 'angular-star-rating';
import {BaseProductListPageComponent} from './product-list-page/base-product-list-page.component';


@NgModule({
    declarations: [BaseProductListPageComponent],
    imports: [
        StarRatingModule.forChild(),
    ],
    exports: [
        StarRatingModule
    ]
})
export class ProductListModule {
}
