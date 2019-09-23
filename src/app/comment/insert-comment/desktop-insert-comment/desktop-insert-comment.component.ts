import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentFormService} from '../../insert-comment-form/comment-form.service';
import {CommentSummaryDTO} from '../../../dto/comment/CommentSummaryDTO';
import {MatDialog} from '@angular/material';
import {DesktopInsertCommentPopupComponent} from '../../desktop-insert-comment-popup/desktop-insert-comment-popup.component';
import {BaseInsertCommentComponent} from '../base-insert-comment.component';

@Component({
    selector: 'app-desktop-insert-comment',
    templateUrl: './desktop-insert-comment.component.html',
    styleUrls: ['./desktop-insert-comment.component.scss']
})
export class DesktopInsertCommentComponent extends BaseInsertCommentComponent implements OnInit {

    @Input() commentSummary: CommentSummaryDTO = null;
    @Output() cancel = new EventEmitter();
    @Input() isEditForm = false;

    title = 'ثبت نظر جدید';

    constructor(public commentFormService: CommentFormService,
                public dialog: MatDialog) {
        super(commentFormService);
    }

    ngOnInit() {
        if (this.isEditForm) {
            this.title = 'ویرایش نظر';
        }
        this.commentFormService.setInitialState(this.commentSummary);
    }

    cancelAndReturn() {
        this.cancel.emit();
    }

    submitCommit() {
        this.isLoading = true;
        this.commentFormService.submitComment().subscribe(() => {
            this.isLoading = false;
            if (this.commentForm) {
                this.commentForm.resetForm();
            }
            const confirmDialog = this.dialog.open(DesktopInsertCommentPopupComponent, {
                width: '90%',
                maxWidth: '600px',
                height: '320px',
            });
            confirmDialog.afterClosed().subscribe(() => {
                this.cancelAndReturn();
            });
        }, () => this.isLoading = false);
    }
}
