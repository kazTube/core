import {Component, ViewChild} from '@angular/core';
import {InsertCommentFormComponent} from '../insert-comment-form/insert-comment-form.component';
import {CommentFormService} from '../insert-comment-form/comment-form.service';

@Component({
    template: '',
})
export class BaseInsertCommentComponent {
    isLoading = false;
    @ViewChild('commentForm') commentForm: InsertCommentFormComponent;

    constructor(public commentFormService: CommentFormService) {
    }

    isConfirmButtonDisabled() {
        return !this.commentFormService.canSubmitCommentInfo()
            || this.isLoading;
    }
}
