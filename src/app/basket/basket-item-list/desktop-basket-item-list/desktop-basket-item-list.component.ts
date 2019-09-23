import {Component} from '@angular/core';
import {BaseBasketItemListComponent} from '../base-basket-item-list.component';
import {BasketPageService} from '../../basket-page/basket-page.service';
import {RoutingService} from '../../../routing/routing.service';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-desktop-basket-item-list',
    templateUrl: './desktop-basket-item-list.component.html',
    styleUrls: ['./desktop-basket-item-list.component.scss']
})
export class DesktopBasketItemListComponent extends BaseBasketItemListComponent {

    constructor(basketService: BasketPageService, routingService: RoutingService, dialog: MatDialog) {
        super(basketService, routingService, dialog);
    }

}
