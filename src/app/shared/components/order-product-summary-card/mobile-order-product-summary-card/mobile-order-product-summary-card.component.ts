import {Component} from '@angular/core';
import {BaseOrderProductSummaryCardComponent} from '../base-order-product-summary-card.component';
import {Router} from '@angular/router';

@Component({
    selector: 'app-mobile-order-product-summary-card',
    templateUrl: './mobile-order-product-summary-card.component.html',
    styleUrls: ['./mobile-order-product-summary-card.component.scss']
})
export class MobileOrderProductSummaryCardComponent extends BaseOrderProductSummaryCardComponent {

    constructor(router: Router) {
        super(router);
    }

}
