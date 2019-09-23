import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';

@Component({
    selector: 'app-subscribe-to-pharmacy-pop-up',
    templateUrl: './subscribe-to-pharmacy-pop-up.component.html',
    styleUrls: ['./subscribe-to-pharmacy-pop-up.component.scss']
})
export class SubscribeToPharmacyPopUpComponent {

    constructor(public dialogRef: MatDialogRef<SubscribeToPharmacyPopUpComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public router: Router) {
    }

    cancel() {
        this.dialogRef.close();
    }
}
