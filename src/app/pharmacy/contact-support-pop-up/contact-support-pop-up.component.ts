import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';

@Component({
    selector: 'app-contact-support-pop-up',
    templateUrl: './contact-support-pop-up.component.html',
    styleUrls: ['./contact-support-pop-up.component.scss']
})
export class ContactSupportPopUpComponent {

    constructor(public dialogRef: MatDialogRef<ContactSupportPopUpComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    cancel() {
        this.dialogRef.close();
    }

}
