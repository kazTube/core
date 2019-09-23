import {Component} from '@angular/core';
import {BaseBasketItemCardComponent} from '../base-basket-item-card.component';

@Component({
    selector: 'app-desktop-basket-item-card',
    templateUrl: './desktop-basket-item-card.component.html',
    styleUrls: ['./desktop-basket-item-card.component.scss']
})
export class DesktopBasketItemCardComponent extends BaseBasketItemCardComponent   {
    constructor() {
        super();
    }
}
