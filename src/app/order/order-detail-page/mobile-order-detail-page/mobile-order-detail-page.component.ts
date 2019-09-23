import {Component, OnInit} from '@angular/core';
import {BaseOrderDetailPageComponent} from '../base-order-detail-page.component';
import {ActivatedRoute, Router} from '@angular/router';
import {RoutingService} from '../../../routing/routing.service';

@Component({
    selector: 'app-mobile-order-detail',
    templateUrl: './mobile-order-detail-page.component.html',
    styleUrls: ['./mobile-order-detail-page.component.scss']
})
export class MobileOrderDetailPageComponent extends BaseOrderDetailPageComponent implements OnInit {

    constructor(
        route: ActivatedRoute,
        router: Router,
        routingService: RoutingService) {
        super(route, router, routingService);
    }

    ngOnInit() {
        super.ngOnInit();
    }
}
