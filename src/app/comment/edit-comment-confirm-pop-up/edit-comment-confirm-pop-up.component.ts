import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';

@Component({
    selector: 'app-edit-comment-confirm-pop-up',
    templateUrl: './edit-comment-confirm-pop-up.component.html',
    styleUrls: ['./edit-comment-confirm-pop-up.component.scss']
})
export class EditCommentConfirmPopUpComponent {

    constructor(public dialogRef: MatDialogRef<EditCommentConfirmPopUpComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    cancel() {
        this.dialogRef.close();
    }

}
