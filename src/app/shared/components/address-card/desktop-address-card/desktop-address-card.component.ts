import {Component, Input, OnInit} from '@angular/core';
import {BaseAddressCardComponent} from '../base-address-card.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-desktop-address-card',
    templateUrl: './desktop-address-card.component.html',
    styleUrls: ['./desktop-address-card.component.scss']
})
export class DesktopAddressCardComponent extends BaseAddressCardComponent implements OnInit {

    @Input() readonly = false;

    constructor(public dialog: MatDialog) {
        super(dialog);
    }

    ngOnInit() {
        if (this.readonly) {
            this.isSelected = true;
        }
    }
}
