import {Component} from '@angular/core';
import {BaseProductAttributesComponent} from '../base-product-attributes.component';

@Component({
    selector: 'app-desktop-product-attributes',
    templateUrl: './desktop-product-attributes.component.html',
    styleUrls: ['./desktop-product-attributes.component.scss']
})
export class DesktopProductAttributesComponent extends BaseProductAttributesComponent {

    constructor() {
        super();
    }
}
