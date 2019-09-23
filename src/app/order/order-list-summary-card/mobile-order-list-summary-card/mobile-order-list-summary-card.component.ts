import {Component, OnInit} from '@angular/core';
import {BaseOrderListSummaryCardComponent} from '../base-order-list-summary-card.component';
import {ActivatedRoute, Router} from '@angular/router';
import {RoutingService} from '../../../routing/routing.service';

@Component({
    selector: 'app-mobile-order-list-summary-card',
    templateUrl: './mobile-order-list-summary-card.component.html',
    styleUrls: ['./mobile-order-list-summary-card.component.scss']
})
export class MobileOrderListSummaryCardComponent extends BaseOrderListSummaryCardComponent implements OnInit {

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public routingService: RoutingService) {
        super(route, router, routingService);
    }

    ngOnInit() {
        super.ngOnInit();
    }
}
