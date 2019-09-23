import {OrderDetailDTO} from '../../dto/order/OrderDetailDTO';
import {Component, Input} from '@angular/core';


@Component({
    template: '',
})
export class BaseFinalizePurchaseComponent {

    @Input() orderDetail: OrderDetailDTO;

    constructor() {
    }

}
