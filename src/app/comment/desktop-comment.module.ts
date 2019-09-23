import {NgModule} from '@angular/core';
import {DesktopInsertCommentComponent} from './insert-comment/desktop-insert-comment/desktop-insert-comment.component';
import {CommentModule} from './comment.module';
import {DesktopInsertCommentPopupComponent} from './desktop-insert-comment-popup/desktop-insert-comment-popup.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [DesktopInsertCommentComponent, DesktopInsertCommentPopupComponent],
    imports: [
        CommentModule,
        SharedModule
    ],
    exports: [
        CommentModule,
        DesktopInsertCommentComponent
    ],
    entryComponents: [DesktopInsertCommentPopupComponent]
})
export class DesktopCommentModule {
}
