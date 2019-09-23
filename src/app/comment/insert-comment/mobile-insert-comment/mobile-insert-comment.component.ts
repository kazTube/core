import {Component, OnInit} from '@angular/core';
import {CommentSummaryDTO} from '../../../dto/comment/CommentSummaryDTO';
import {animate, style, transition, trigger} from '@angular/animations';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentDTO} from '../../../dto/comment/CommentDTO';
import {CommentFormService} from '../../insert-comment-form/comment-form.service';
import {RoutingService} from '../../../routing/routing.service';
import {BaseInsertCommentComponent} from '../base-insert-comment.component';
import {AppStateService} from '../../../core/services/app-state.service';

@Component({
    selector: 'app-mobile-insert-comment',
    templateUrl: './mobile-insert-comment.component.html',
    styleUrls: ['./mobile-insert-comment.component.scss'],
    animations: [
        trigger('messageAnimation', [
            transition('* => sent', [
                style({opacity: '0', transform: 'translateX(100%)'}),
                animate('0.5s 0.5s ease', style({opacity: '1', transform: 'translateX(0)'}))
            ]),
            transition('notSent => void', [
                style({opacity: '1', display: 'none'}),
                animate('0.5s ease', style({transform: 'translateX(-100%)', opacity: '0'}))
            ])
        ])
    ]
})
export class MobileInsertCommentComponent extends BaseInsertCommentComponent implements OnInit {
    productCode: string;
    commentHasBeenSent = false;
    isEditForm = false;

    constructor(public route: ActivatedRoute,
                public commentFormService: CommentFormService,
                public routingService: RoutingService,
                public appStateService: AppStateService,
                public router: Router) {
        super(commentFormService);
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.productCode = params.get('code');
        });
        this.route.data.subscribe((data: { userComment: CommentDTO }) => {
            let userCommentSummary = CommentSummaryDTO.emptyInstance();
            if (data.userComment) {
                this.isEditForm = true;
                userCommentSummary = new CommentSummaryDTO(
                    data.userComment.userProductCommentId,
                    this.productCode,
                    data.userComment.title,
                    data.userComment.message,
                    data.userComment.positiveOpinion,
                    data.userComment.negativeOpinion,
                    data.userComment.rate
                );
            } else {
                userCommentSummary.productCode = this.productCode;
            }
            this.commentFormService.setInitialState(userCommentSummary);
        });
    }


    public insertComment() {
        this.isLoading = true;
        this.commentFormService.submitComment().subscribe(isSent => {
            this.isLoading = false;
            if (isSent) {
                this.commentHasBeenSent = true;
                this.appStateService.scrollToTop();
                if (this.commentForm) {
                    this.commentForm.resetForm();
                }
            }
        }, () => this.isLoading = false);
    }
}
