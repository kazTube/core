import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PredefinedCommentDTO} from '../../dto/basket/PredefinedCommentDTO';

@Component({
    selector: 'app-desktop-cancel-purchase-popup',
    templateUrl: './desktop-cancel-purchase-popup.component.html',
    styleUrls: ['./desktop-cancel-purchase-popup.component.scss']
})
export class DesktopCancelPurchasePopupComponent implements OnInit {
    canceledPreDefinedCommentList: PredefinedCommentDTO[];
    orderId: number;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<DesktopCancelPurchasePopupComponent>,
    ) {
    }

    ngOnInit() {
        this.canceledPreDefinedCommentList = this.data.canceledPreDefinedCommentList;
        this.orderId = this.data.orderId;
    }

    orderCanceled() {
        this.dialogRef.close(true);
    }

    returnToBasket() {
        this.dialogRef.close(false);
    }
}
