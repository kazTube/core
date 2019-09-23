import {NgModule} from '@angular/core';
import {MobileOrderDetailPageComponent} from './order-detail-page/mobile-order-detail-page/mobile-order-detail-page.component';
import {MobileOrderDetailCardComponent} from './order-detail-card/mobile-order-detail-card/mobile-order-detail-card.component';
import {MobileOrderListComponent} from './order-list/mobile-order-list/mobile-order-list.component';
import {MobileOrderListSummaryCardComponent} from './order-list-summary-card/mobile-order-list-summary-card/mobile-order-list-summary-card.component';
import {RouterModule, Routes} from '@angular/router';
import {OrderListResolver} from './order-list/order-list.resolver';
import {OrderDetailResolver} from './order-detail-page/order-detail.resolver';
import {OrderModule} from './order.module';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
    {
        path: 'list',
        component: MobileOrderListComponent,
        resolve: {orderList: OrderListResolver},
        data: {animation: 'order-list'}
    },
    {
        path: 'detail/:id',
        component: MobileOrderDetailPageComponent,
        resolve: {orderDetail: OrderDetailResolver},
        data: {animation: 'order-detail'}
    },
    {
        path: '**',
        redirectTo: 'list'
    }
];

@NgModule({
    declarations: [
        MobileOrderDetailPageComponent,
        MobileOrderDetailCardComponent,
        MobileOrderListComponent,
        MobileOrderListSummaryCardComponent],
    imports: [
        OrderModule,
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class MobileOrderModule {
}
