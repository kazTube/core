import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderSummaryDTO} from '../../dto/order/OrderSummaryDTO';
import {MatProgressButtonOptions} from 'mat-progress-buttons';
import {OrderListService} from './order-list.service';
import {RoutingService} from '../../routing/routing.service';

@Component({
    template: ''
})
export class BaseOrderListComponent {

    loadMoreButtonOptions: MatProgressButtonOptions = {
        active: false,
        text: 'مشاهده بیشتر',
        spinnerSize: 19,
        raised: false,
        stroked: false,
        fullWidth: false,
        disabled: false,
        mode: 'indeterminate',
    };

    constructor(
        public route: ActivatedRoute,
        public orderListService: OrderListService,
        public routingService: RoutingService) {
    }

    loadMoreOrders() {
        this.orderListService.orderOffset = this.orderListService.orderOffset + this.orderListService.orderListPageSize;
        this.loadMoreButtonOptions.active = true;
        this.orderListService
            .getOrderList(this.orderListService.orderListPageSize, this.orderListService.orderOffset)
            .subscribe((orderList: OrderSummaryDTO[]) => {
                this.orderListService.orderList = this.orderListService.orderList.concat(orderList);
                this.orderListService.hasMoreOrder = orderList.length === this.orderListService.orderListPageSize;
                this.loadMoreButtonOptions.active = false;
            }, () => {
                this.orderListService.hasMoreOrder = false;
                this.loadMoreButtonOptions.active = false;
            });
    }
}
