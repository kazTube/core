import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BaseProductDetailPageComponent} from '../base-product-detail-page.component';
import {BasketPageService} from '../../../basket/basket-page/basket-page.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentService} from '../../../comment/comment.service';
import {CommentDTO} from '../../../dto/comment/CommentDTO';
import {CommentSummaryDTO} from '../../../dto/comment/CommentSummaryDTO';
import {UtilService} from '../../../core/services/util.service';
import {HeaderService} from '../../../layout/header/header.service';

@Component({
    selector: 'app-desktop-product-detail-page',
    templateUrl: './desktop-product-detail-page.component.html',
    styleUrls: ['./desktop-product-detail-page.component.scss']
})
export class DesktopProductDetailPageComponent extends BaseProductDetailPageComponent implements OnInit {

    @ViewChild('attributeCommentContainer') attributeCommentContainer: ElementRef;
    isLoadingComments = false;
    commentList: CommentDTO[];
    thisUserComment: CommentDTO;
    thisUserCommentSummary: CommentSummaryDTO = null;
    commentsCount = 0;
    totalRate = 0;
    offset = 0;
    showInsertComment = false;

    constructor(basketService: BasketPageService,
                headerService: HeaderService,
                route: ActivatedRoute,
                router: Router,
                utilService: UtilService,
                private commentService: CommentService) {
        super(basketService, headerService, route, router, utilService);
    }

    onAddProductToBasket() {
        if (this.isSpecialOfferProduct) {
            const addToBasket$ = this.addSpecialOfferProductToBasket();
            addToBasket$.subscribe(() => {
                this.router.navigate([`/pharmacy/${this.pharmacyHixCode}/${this.product.productCode}`]);
            });
        } else {
            const addToBasket$ = this.addProductToBasket();
            addToBasket$.subscribe(() => {
                // todo add real categoryId instead 1 - from product
                this.router.navigate([`/product/detail/suggestion/${1}/${this.product.productCode}`]);

            });
        }
    }

    ngOnInit() {
        super.ngOnInit();
        this.isLoadingComments = true;
        this.commentService.getCommentList(this.product.productCode, this.commentService.commentListPageSize,
            this.offset).subscribe(result => {
            this.commentList = result.commentList;
            this.thisUserComment = result.thisUserComment;
            if (this.thisUserComment) {
                this.thisUserCommentSummary = new CommentSummaryDTO(
                    this.thisUserComment.userProductCommentId,
                    this.product.productCode,
                    this.thisUserComment.title,
                    this.thisUserComment.message,
                    this.thisUserComment.positiveOpinion,
                    this.thisUserComment.negativeOpinion,
                    this.thisUserComment.rate
                );
            } else {
                this.thisUserCommentSummary = CommentSummaryDTO.emptyInstance();
                this.thisUserCommentSummary.productCode = this.product.productCode;
            }
            this.commentsCount = result.commentsCount;
            this.totalRate = result.totalRate;
            this.isLoadingComments = false;
        }, () => {
            this.isLoadingComments = false;
        });
    }

    setInsertComment(showInsertComment: boolean) {
        this.showInsertComment = showInsertComment;
        if (this.attributeCommentContainer) {
            this.attributeCommentContainer.nativeElement.scrollIntoView({behavior: 'smooth'});
        }
    }

}
