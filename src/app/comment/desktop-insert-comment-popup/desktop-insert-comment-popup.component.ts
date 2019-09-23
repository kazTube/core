import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-desktop-insert-comment-popup',
    templateUrl: './desktop-insert-comment-popup.component.html',
    styleUrls: ['./desktop-insert-comment-popup.component.scss']
})
export class DesktopInsertCommentPopupComponent {

    constructor(public dialogRef: MatDialogRef<DesktopInsertCommentPopupComponent>) {
    }

    cancel() {
        this.dialogRef.close();
    }
}
