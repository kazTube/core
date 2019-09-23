import {Component} from '@angular/core';
import {BaseFinalizePurchaseComponent} from '../base-finalize-purchase.component';

@Component({
    selector: 'app-mobile-finalize-purchase',
    templateUrl: './mobile-finalize-purchase.component.html',
    styleUrls: ['./mobile-finalize-purchase.component.scss']
})
export class MobileFinalizePurchaseComponent extends BaseFinalizePurchaseComponent {

    constructor() {
        super();
    }

}
