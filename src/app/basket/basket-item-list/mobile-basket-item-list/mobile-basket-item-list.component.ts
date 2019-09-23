import {Component} from '@angular/core';
import {BaseBasketItemListComponent} from '../base-basket-item-list.component';
import {BasketPageService} from '../../basket-page/basket-page.service';
import {RoutingService} from '../../../routing/routing.service';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-mobile-basket-list',
    templateUrl: './mobile-basket-item-list.component.html',
    styleUrls: ['./mobile-basket-item-list.component.scss']
})
export class MobileBasketItemListComponent extends BaseBasketItemListComponent {

    constructor(basketService: BasketPageService, routingService: RoutingService, dialog: MatDialog) {
        super(basketService, routingService, dialog);
    }

}
