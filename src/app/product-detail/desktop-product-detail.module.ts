import {NgModule} from '@angular/core';
import {DesktopProductDescriptionCardComponent} from './product-description-card/desktop-product-description-card/desktop-product-description-card.component';
import {DesktopProductAttributesComponent} from './product-attributes/desktop-product-attributes/desktop-product-attributes.component';
import {DesktopProductDetailPageComponent} from './product-detail-page/desktop-product-detail-page/desktop-product-detail-page.component';
import {RouterModule, Routes} from '@angular/router';
import {SpecialOfferProductDetailResolver} from './product-detail-page/special-offer-product-detail.resolver';
import {AuthenticationGuard} from '../routing/authentication.guard';
import {AddNewProductCardComponent} from '../shared/components/add-new-product-card/add-new-product-card.component';
import {ProductDetailResolver} from './product-detail-page/product-detail.resolver';
import {DesktopProductSuggestionPageComponent} from './desktop-product-suggestion-page/desktop-product-suggestion-page.component';
import {DesktopProductSuggestionPageResolver} from './desktop-product-suggestion-page/desktop-product-suggestion-page.resolver';
import {DesktopCommentModule} from '../comment/desktop-comment.module';
import {DesktopImageSliderPopUpComponent} from './desktop-image-slider-pop-up/desktop-image-slider-pop-up.component';
import {ProductDetailModule} from './product-detail.module';
import {SharedModule} from '../shared/shared.module';


const routes: Routes = [
    {
        path: 'specialOffer/:code/:hixCode',
        component: DesktopProductDetailPageComponent,
        resolve: {resolvedData: SpecialOfferProductDetailResolver},
        data: {animation: 'product-detail'},
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'suggestion/:id/:code',
        component: DesktopProductSuggestionPageComponent,
        resolve: {resolvedData: DesktopProductSuggestionPageResolver},
        data: {animation: 'product-detail'}
    },
    {
        path: 'new',
        component: AddNewProductCardComponent,
        data: {animation: 'product-detail'}
    },
    {
        path: ':code',
        component: DesktopProductDetailPageComponent,
        resolve: {resolvedData: ProductDetailResolver},
        data: {animation: 'product-detail'}
    },

    {
        path: '**',
        redirectTo: '/home'
    }

];

@NgModule({
    declarations: [
        DesktopProductDescriptionCardComponent,
        DesktopProductAttributesComponent,
        DesktopProductDetailPageComponent,
        DesktopProductSuggestionPageComponent,
        DesktopImageSliderPopUpComponent],
    imports: [
        SharedModule,
        DesktopCommentModule,
        ProductDetailModule,
        RouterModule.forChild(routes)
    ],
    entryComponents: [DesktopImageSliderPopUpComponent]
})
export class DesktopProductDetailModule {
}
