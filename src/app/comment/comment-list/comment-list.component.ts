import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CommentDTO} from '../../dto/comment/CommentDTO';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentService} from '../comment.service';
import {MatProgressButtonOptions} from 'mat-progress-buttons';
import {CommentListDTO} from '../../dto/comment/CommentListDTO';
import {MatDialog} from '@angular/material';
import {EditCommentConfirmPopUpComponent} from '../edit-comment-confirm-pop-up/edit-comment-confirm-pop-up.component';
import {RoutingService} from '../../routing/routing.service';
import {HeaderService} from '../../layout/header/header.service';
import {AppStateService} from '../../core/services/app-state.service';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnChanges, OnInit {

    @Input() commentList: CommentDTO[] = [];
    @Input() commentsCount = 0;
    @Input() totalRate = 0;
    @Input() productCode: string;
    @Input() thisUserComment: CommentDTO;

    @Output() insertCommentClick = new EventEmitter();

    hasMoreComment = true;
    loadMoreButtonOptions: MatProgressButtonOptions = {
        active: false,
        text: 'مشاهده بیشتر',
        spinnerSize: 19,
        raised: false,
        stroked: false,
        fullWidth: false,
        disabled: false,
        mode: 'indeterminate',
    };

    private loadingCommentMap = new Map();
    private offset = 0;

    constructor(public route: ActivatedRoute,
                public headerService: HeaderService,
                public commentService: CommentService,
                public appStateService: AppStateService,
                public routingService: RoutingService,
                public dialog: MatDialog,
                public router: Router) {

    }

    ngOnInit(): void {
        if (this.appStateService.isMobile()) {
            this.route.paramMap.subscribe(params => {
                this.productCode = params.get('code');
            });
            this.route.data.subscribe(data => {
                this.commentList = data.resolvedData.commentList;
                this.commentsCount = data.resolvedData.commentsCount;
                this.totalRate = data.resolvedData.totalRate;
                this.thisUserComment = data.resolvedData.thisUserComment;
                this.hasMoreComment = this.commentList.length >= this.commentService.commentListPageSize;
            });
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['commentList']) {
            this.hasMoreComment = this.commentList.length >= this.commentService.commentListPageSize;
        }
    }


    insertComment() {
        if (!this.thisUserComment) {
            if (this.appStateService.isMobile()) {
                this.router.navigate(['/comment/insert/' + this.productCode]);
            } else {
                this.insertCommentClick.emit();
            }
        } else {
            const confirmDialog = this.dialog.open(EditCommentConfirmPopUpComponent, {
                width: '25%',
                minWidth: '265px',
                height: '270px',
                data: {msg: 'کاربر گرامی شما قبلا برای این محصول نظر خود را ثبت کرده اید آیا تمایل دارید نظر خود را ویرایش نمایید؟'}
            });
            confirmDialog.afterClosed().subscribe(isConfirmed => {
                if (isConfirmed) {
                    if (this.appStateService.isMobile()) {
                        this.router.navigate([`/comment/edit/${this.productCode}`]);
                    } else {
                        this.insertCommentClick.emit();
                    }
                }
            });
        }
    }

    onLike(id: number) {
        this.loadingCommentMap.set(id, true);
        this.commentService.like(id).subscribe(() => {
            this.commentList = this.commentList.map(comment => {
                if (comment.userProductCommentId === id) {
                    comment.likeCount++;
                    comment.isLikedByThisUser = true;
                    comment.isDislikedByThisUser = false;
                }
                return comment;
            });
            this.loadingCommentMap.delete(id);
        }, () => {
            this.loadingCommentMap.delete(id);
        });
    }

    onDislike(id: number) {
        this.loadingCommentMap.set(id, true);
        this.commentService.dislike(id).subscribe(() => {
            this.commentList = this.commentList.map(comment => {
                if (comment.userProductCommentId === id) {
                    comment.dislikeCount++;
                    comment.isDislikedByThisUser = true;
                    comment.isLikedByThisUser = false;
                }
                return comment;
            });
            this.loadingCommentMap.delete(id);
        }, () => {
            this.loadingCommentMap.delete(id);
        });
    }

    onDelete(id: number) {
        this.loadingCommentMap.set(id, true);
        this.commentService.delete(id).subscribe(isDeleted => {
            this.loadingCommentMap.delete(id);
            if (isDeleted) {
                this.thisUserComment = undefined;
            }
        }, () => {
            this.loadingCommentMap.delete(id);
        });
    }

    onEdit(id: number) {
        this.loadingCommentMap.set(id, true);
        if (this.appStateService.isMobile()) {
            this.router.navigate([`/comment/edit/${this.productCode}`]);
        } else {
            this.insertCommentClick.emit();
        }
    }

    loadMoreComments() {
        this.offset = this.offset + this.commentService.commentListPageSize;
        this.loadMoreButtonOptions.active = true;
        this.commentService.getCommentList(this.productCode,
            this.commentService.commentListPageSize, this.offset).subscribe((response: CommentListDTO) => {
            this.commentList = this.commentList.concat(response.commentList);
            this.commentsCount = response.commentsCount;
            this.totalRate = response.totalRate;
            this.hasMoreComment = this.commentList.length < this.commentsCount;
            this.thisUserComment = response.thisUserComment;
            this.loadMoreButtonOptions.active = false;
        }, () => {
            this.loadMoreButtonOptions.active = false;
        });
    }

    isCommentLoading(id: number): boolean {
        return this.loadingCommentMap.get(id) === true;
    }


}
