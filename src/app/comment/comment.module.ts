import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {CommentCardComponent} from './comment-card/comment-card.component';
import {StarRatingModule} from 'angular-star-rating';
import {CommentListComponent} from './comment-list/comment-list.component';
import {EditCommentConfirmPopUpComponent} from './edit-comment-confirm-pop-up/edit-comment-confirm-pop-up.component';
import {InsertCommentFormComponent} from './insert-comment-form/insert-comment-form.component';
import {BaseInsertCommentComponent} from './insert-comment/base-insert-comment.component';


@NgModule({
    declarations: [
        CommentCardComponent,
        CommentListComponent,
        EditCommentConfirmPopUpComponent,
        InsertCommentFormComponent,
        BaseInsertCommentComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        StarRatingModule.forChild()
    ],
    exports: [
        CommonModule,
        SharedModule,
        CommentCardComponent,
        CommentListComponent,
        EditCommentConfirmPopUpComponent,
        InsertCommentFormComponent
    ],
    entryComponents: [EditCommentConfirmPopUpComponent]
})
export class CommentModule {
}
