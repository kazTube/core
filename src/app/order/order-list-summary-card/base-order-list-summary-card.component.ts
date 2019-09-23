import {Component, Input, OnInit} from '@angular/core';
import {OrderSummaryDTO} from '../../dto/order/OrderSummaryDTO';
import {ActivatedRoute, Router} from '@angular/router';
import {RoutingService} from '../../routing/routing.service';

@Component({
    template: ''
})
export class BaseOrderListSummaryCardComponent implements OnInit {

    @Input() order: OrderSummaryDTO;
    showPaymentInfo = false;

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public routingService: RoutingService) {
    }

    ngOnInit() {
        this.showPaymentInfo =
            !(this.order.isCancelable
                && !this.order.isPaid
                && !this.order.isCanceled
                && !this.order.isReadyToPay);
    }

    goToOrderDetail(orderDetailPath: string) {
        if (this.order.isReadyToPay) {
            this.router.navigate(['/basket/finalize/purchase/' + this.order.orderId]);
        } else {
            this.router.navigate([orderDetailPath + this.order.orderId]);
        }
    }

}
