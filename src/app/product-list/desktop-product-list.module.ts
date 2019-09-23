import {NgModule} from '@angular/core';
import {DesktopProductCategoryTreeComponent} from './desktop-product-category-tree/desktop-product-category-tree.component';
import {DesktopProductListResultCardComponent} from './desktop-product-list-result-card/desktop-product-list-result-card.component';
import {ProductListModule} from './product-list.module';
import {DesktopSearchInCategoryComponent} from './desktop-search-in-category/desktop-search-in-category.component';
import {DesktopProductListPageComponent} from './product-list-page/desktop-product-list-page/desktop-product-list-page.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductListPageResolver} from './product-list-page/product-list-page-resolver';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
    {
        path: ':id',
        component: DesktopProductListPageComponent,
        resolve: {resolvedData: ProductListPageResolver},

    },
    {
        path: '**',
        redirectTo: '/home'
    }
];

@NgModule({
    declarations: [
        DesktopProductCategoryTreeComponent,
        DesktopProductListResultCardComponent,
        DesktopSearchInCategoryComponent,
        DesktopProductListPageComponent
    ],
    exports: [],
    imports: [
        SharedModule,
        ProductListModule,
        RouterModule.forChild(routes)
    ],
    entryComponents: [DesktopProductListPageComponent]
})
export class DesktopProductListModule {
}
