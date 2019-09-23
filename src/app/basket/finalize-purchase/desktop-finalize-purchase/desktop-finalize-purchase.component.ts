import {Component} from '@angular/core';
import {BaseFinalizePurchaseComponent} from '../base-finalize-purchase.component';

@Component({
    selector: 'app-desktop-finalize-purchase',
    templateUrl: './desktop-finalize-purchase.component.html',
    styleUrls: ['./desktop-finalize-purchase.component.scss']
})
export class DesktopFinalizePurchaseComponent extends BaseFinalizePurchaseComponent {

    constructor() {
        super();
    }
}
