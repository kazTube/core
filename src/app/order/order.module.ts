import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {BaseOrderDetailCardComponent} from './order-detail-card/base-order-detail-card.component';
import {BaseOrderDetailPageComponent} from './order-detail-page/base-order-detail-page.component';
import {BaseOrderListComponent} from './order-list/base-order-list.component';
import {BaseOrderListSummaryCardComponent} from './order-list-summary-card/base-order-list-summary-card.component';

@NgModule({
    declarations: [
        BaseOrderDetailCardComponent,
        BaseOrderDetailPageComponent,
        BaseOrderListComponent,
        BaseOrderListSummaryCardComponent],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        CommonModule
    ]
})
export class OrderModule {
}
