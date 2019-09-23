import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-confirm-pop-up',
    templateUrl: './confirm-pop-up.component.html',
    styleUrls: ['./confirm-pop-up.component.scss']
})
export class ConfirmPopUpComponent {

    constructor(public dialogRef: MatDialogRef<ConfirmPopUpComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    cancel() {
        this.dialogRef.close();
    }

}
