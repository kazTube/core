import {Component, OnInit} from '@angular/core';
import {BaseOrderDetailPageComponent} from '../base-order-detail-page.component';
import {ActivatedRoute, Router} from '@angular/router';
import {RoutingService} from '../../../routing/routing.service';

@Component({
    selector: 'app-desktop-order-detail-page',
    templateUrl: './desktop-order-detail-page.component.html',
    styleUrls: ['./desktop-order-detail-page.component.scss']
})
export class DesktopOrderDetailPageComponent extends BaseOrderDetailPageComponent implements OnInit {

    constructor(public route: ActivatedRoute,
                public router: Router,
                public routingService: RoutingService) {
        super(route, router, routingService);
    }

    ngOnInit() {
        super.ngOnInit();
    }
}
