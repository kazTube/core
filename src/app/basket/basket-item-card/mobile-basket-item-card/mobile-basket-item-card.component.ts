import {Component} from '@angular/core';
import {BaseBasketItemCardComponent} from '../base-basket-item-card.component';

@Component({
    selector: 'app-mobile-basket-item-card',
    templateUrl: './mobile-basket-item-card.component.html',
    styleUrls: ['./mobile-basket-item-card.component.scss']
})
export class MobileBasketItemCardComponent extends BaseBasketItemCardComponent {

    constructor() {
        super();
    }

}
