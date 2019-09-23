import {NgModule} from '@angular/core';
import {MobileProductAttributesComponent} from './product-attributes/mobile-product-attributes/mobile-product-attributes.component';
import {MobileProductDescriptionCardComponent} from './product-description-card/mobile-product-description-card/mobile-product-description-card.component';
import {MobileProductDetailPageComponent} from './product-detail-page/mobile-product-detail-page/mobile-product-detail-page.component';
import {RouterModule, Routes} from '@angular/router';
import {SpecialOfferProductDetailResolver} from './product-detail-page/special-offer-product-detail.resolver';
import {AuthenticationGuard} from '../routing/authentication.guard';
import {ProductDetailResolver} from './product-detail-page/product-detail.resolver';
import {ProductDetailModule} from './product-detail.module';
import {AddNewProductCardComponent} from '../shared/components/add-new-product-card/add-new-product-card.component';

const routes: Routes = [
    {
        path: 'specialOffer/:code/:hixCode',
        component: MobileProductDetailPageComponent,
        resolve: {resolvedData: SpecialOfferProductDetailResolver},
        data: {animation: 'product-detail'},
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'new',
        component: AddNewProductCardComponent,
        data: {animation: 'product-detail'}
    },
    {
        path: ':code',
        component: MobileProductDetailPageComponent,
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
        MobileProductAttributesComponent,
        MobileProductDescriptionCardComponent,
        MobileProductDetailPageComponent],
    imports: [
        ProductDetailModule,
        RouterModule.forChild(routes)
    ],
})
export class MobileProductDetailModule {
}
