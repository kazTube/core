import {Component, Input} from '@angular/core';
import {BaseOrderProductSummaryCardComponent} from '../base-order-product-summary-card.component';
import {Router} from '@angular/router';

@Component({
    selector: 'app-desktop-order-product-summary-card',
    templateUrl: './desktop-order-product-summary-card.component.html',
    styleUrls: ['./desktop-order-product-summary-card.component.scss']
})
export class DesktopOrderProductSummaryCardComponent extends BaseOrderProductSummaryCardComponent {

    @Input() svgIconName: string = null;
    @Input() greenMode = false;

    constructor(router: Router) {
        super(router);
    }


}
