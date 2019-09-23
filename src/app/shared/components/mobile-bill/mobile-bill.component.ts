import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-mobile-bill',
    templateUrl: './mobile-bill.component.html',
    styleUrls: ['./mobile-bill.component.scss']
})
export class MobileBillComponent {

    @Input() transportPrice: number;
    @Input() orderPrice: number;
    @Input() totalPrice: number;

    constructor() {
    }

}
