import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderDetailDTO} from '../../dto/order/OrderDetailDTO';
import {RoutingService} from '../../routing/routing.service';

@Component({
    template: ''
})
export class BaseOrderDetailPageComponent implements OnInit {

    orderDetail: OrderDetailDTO;

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public routingService: RoutingService) {
    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.orderDetail = data.orderDetail;
        });
    }
}
