import {Component, OnInit} from '@angular/core';
import {BaseOrderListComponent} from '../base-order-list.component';
import {ActivatedRoute} from '@angular/router';
import {OrderListService} from '../order-list.service';
import {RoutingService} from '../../../routing/routing.service';

@Component({
    selector: 'app-mobile-order-list',
    templateUrl: './mobile-order-list.component.html',
    styleUrls: ['./mobile-order-list.component.scss']
})
export class MobileOrderListComponent extends BaseOrderListComponent implements OnInit {

    constructor(
        public route: ActivatedRoute,
        public orderListService: OrderListService,
        public routingService: RoutingService) {
        super(route, orderListService, routingService);
    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.orderListService.orderList = data.orderList;
            this.orderListService.orderOffset = 0;
            this.orderListService.hasMoreOrder = this.orderListService.orderList.length >= this.orderListService.orderListPageSize;
        });
    }

}
