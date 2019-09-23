import {Component} from '@angular/core';
import {BaseAddressCardComponent} from '../base-address-card.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-mobile-address-card',
    templateUrl: './mobile-address-card.component.html',
    styleUrls: ['./mobile-address-card.component.scss']
})
export class MobileAddressCardComponent extends BaseAddressCardComponent {

    constructor(public dialog: MatDialog) {
        super(dialog);
    }
}
