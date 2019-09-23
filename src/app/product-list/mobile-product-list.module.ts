import {NgModule} from '@angular/core';
import {MobileProductListPageComponent} from './product-list-page/mobile-product-list-page/mobile-product-list-page.component';
import {MobileSelectSortByPopUpComponent} from '../shared/components/mobile-select-sort-by-pop-up/mobile-select-sort-by-pop-up.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductListPageResolver} from './product-list-page/product-list-page-resolver';
import {ProductListModule} from './product-list.module';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
    {
        path: ':id',
        component: MobileProductListPageComponent,
        resolve: {resolvedData: ProductListPageResolver}
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];

@NgModule({
    declarations: [
        MobileProductListPageComponent,
    ],
    imports: [
        SharedModule,
        ProductListModule,
        RouterModule.forChild(routes)

    ],
    entryComponents: [MobileSelectSortByPopUpComponent]
})
export class MobileProductListModule {
}
