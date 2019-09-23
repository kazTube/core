import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommentDTO} from '../../dto/comment/CommentDTO';
import {MatDialog} from '@angular/material';
import {ConfirmPopUpComponent} from '../../shared/components/confirm-pop-up/confirm-pop-up.component';

@Component({
    selector: 'app-comment-card',
    templateUrl: './comment-card.component.html',
    styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent {

    @Input() comment: CommentDTO;
    @Input() isUserComment: boolean;
    @Input() isLoading = false;

    @Output() like = new EventEmitter();
    @Output() dislike = new EventEmitter();
    @Output() delete = new EventEmitter();
    @Output() edit = new EventEmitter();

    constructor(public dialog: MatDialog) {
    }

    onLike() {
        this.like.emit(this.comment.userProductCommentId);
    }

    onDislike() {
        this.dislike.emit(this.comment.userProductCommentId);
    }


    onDelete() {
        this.showConfirmation().afterClosed().subscribe(isConfirmed => {
            if (isConfirmed) {
                this.delete.emit(this.comment.userProductCommentId);
            }
        });
    }

    onEdit() {
        this.edit.emit(this.comment.userProductCommentId);
    }

    showConfirmation() {
        return this.dialog.open(ConfirmPopUpComponent, {
            width: '85%',
            maxWidth: '350px',
                height: '200px',
                data: {msg: 'آیا از حذف نظر خود اطمینان دارید؟'}
            }
        );
    }
}
