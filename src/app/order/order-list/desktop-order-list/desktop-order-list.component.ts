import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderListService} from '../order-list.service';
import {RoutingService} from '../../../routing/routing.service';
import {BaseOrderListComponent} from '../base-order-list.component';

@Component({
    selector: 'app-desktop-order-list',
    templateUrl: './desktop-order-list.component.html',
    styleUrls: ['./desktop-order-list.component.scss']
})
export class DesktopOrderListComponent extends BaseOrderListComponent {


    constructor(public route: ActivatedRoute,
                public orderListService: OrderListService,
                public routingService: RoutingService) {
        super(route, orderListService, routingService);
    }
}
