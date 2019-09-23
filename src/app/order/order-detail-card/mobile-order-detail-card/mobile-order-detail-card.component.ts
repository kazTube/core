import {Component, OnInit} from '@angular/core';
import {BaseOrderDetailCardComponent} from '../base-order-detail-card.component';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {RoutingService} from '../../../routing/routing.service';
import {CancelPurchaseService} from '../../../basket/cancel-purchase/cancel-purchase.service';

@Component({
    selector: 'app-mobile-order-detail-card',
    templateUrl: './mobile-order-detail-card.component.html',
    styleUrls: ['./mobile-order-detail-card.component.scss']
})
export class MobileOrderDetailCardComponent extends BaseOrderDetailCardComponent implements OnInit {

    constructor(public route: ActivatedRoute,
                public router: Router,
                public dialog: MatDialog,
                public cancelPurchaseService: CancelPurchaseService,
                public routingService: RoutingService) {
        super(route, router, dialog, cancelPurchaseService, routingService);
    }

    ngOnInit() {
        super.ngOnInit();
    }
}
