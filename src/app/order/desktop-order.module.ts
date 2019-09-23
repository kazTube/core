import {NgModule} from '@angular/core';
import {DesktopOrderListComponent} from './order-list/desktop-order-list/desktop-order-list.component';
import {OrderModule} from './order.module';
import {DesktopOrderDetailCardComponent} from './order-detail-card/desktop-order-detail-card/desktop-order-detail-card.component';
import {DesktopOrderDetailPageComponent} from './order-detail-page/desktop-order-detail-page/desktop-order-detail-page.component';
import {BasketModule} from '../basket/basket.module';
import {DesktopOrderListSummaryCardComponent} from './order-list-summary-card/desktop-order-list-summary-card/desktop-order-list-summary-card.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [
        DesktopOrderListComponent,
        DesktopOrderListSummaryCardComponent,
        DesktopOrderDetailCardComponent,
        DesktopOrderDetailPageComponent
    ],
    imports: [
        OrderModule,
        SharedModule,
        BasketModule
    ],
    exports: [
        OrderModule,
        DesktopOrderDetailCardComponent,
        DesktopOrderListComponent
    ],
    entryComponents: [DesktopOrderListComponent]
})
export class DesktopOrderModule {
}
