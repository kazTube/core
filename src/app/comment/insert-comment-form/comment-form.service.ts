import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CommentSummaryDTO} from '../../dto/comment/CommentSummaryDTO';
import {CommentService} from '../comment.service';
import {UtilService} from '../../core/services/util.service';

@Injectable({
    providedIn: 'root'
})
export class CommentFormService {

    formCommentSummary: CommentSummaryDTO = CommentSummaryDTO.emptyInstance();
    isCommentFormValid = false;
    private initCommentSummary: CommentSummaryDTO = CommentSummaryDTO.emptyInstance();

    constructor(
        public utilService: UtilService,
        public commentService: CommentService) {
    }

    canSubmitCommentInfo(): boolean {
        return this.isCommentFormValid && this.hasCommentInfoChanged();
    }

    submitComment(): Observable<boolean> {
        const commentInfo$ = this.commentService.insertComment(this.formCommentSummary);
        commentInfo$.subscribe(isSent => {
            if (isSent) {
                this.setInitialState(this.formCommentSummary);
            }
        });


        return commentInfo$;
    }

    setInitialState(initCommentSummary: CommentSummaryDTO) {
        if (initCommentSummary) {
            this.initCommentSummary = CommentSummaryDTO.clone(initCommentSummary);
            this.formCommentSummary = CommentSummaryDTO.clone(initCommentSummary);
        }
    }

    private hasCommentInfoChanged(): boolean {
        if (this.formCommentSummary !== undefined && this.initCommentSummary !== undefined) {
            return !(
                this.initCommentSummary.message === this.formCommentSummary.message
                && this.initCommentSummary.title === this.formCommentSummary.title
                && this.initCommentSummary.rate === this.formCommentSummary.rate
                && this.utilService.areStringArraysEqual(
                    this.formCommentSummary.positiveOpinion,
                    this.initCommentSummary.positiveOpinion
                )
                && this.utilService.areStringArraysEqual(
                    this.formCommentSummary.negativeOpinion,
                    this.initCommentSummary.negativeOpinion
                )
            );
        } else {
            return false;
        }
    }
}
