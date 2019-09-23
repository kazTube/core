import {Component, Input, OnInit} from '@angular/core';
import {BaseOrderListSummaryCardComponent} from '../base-order-list-summary-card.component';
import {ActivatedRoute, Router} from '@angular/router';
import {RoutingService} from '../../../routing/routing.service';

@Component({
    selector: 'app-desktop-order-list-summary-card',
    templateUrl: './desktop-order-list-summary-card.component.html',
    styleUrls: ['./desktop-order-list-summary-card.component.scss']
})
export class DesktopOrderListSummaryCardComponent extends BaseOrderListSummaryCardComponent implements OnInit {

    @Input() index: number;
    @Input() summaryMode = false;

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
