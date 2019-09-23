import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ProductSummaryDTO} from '../../dto/product/ProductSummaryDTO';
import {ProductListPageService} from '../product-list-page/product-list-page.service';
import {
    SORT_BY_BESTSELLING,
    SORT_BY_MOST_POPULAR,
    SORT_BY_MOST_VIEWED,
    SORT_BY_NEWEST,
    SortByOption
} from '../../shared/components/mobile-select-sort-by-pop-up/model/SortByOption';
import {ProductSummaryCardTypeEnum} from '../../dto/product/ProductSummaryCardTypeEnum';
import {CardLayoutEnum} from '../../dto/CardLayoutEnum';
import {MediaObserver} from '@angular/flex-layout';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-desktop-product-list-result-card',
    templateUrl: './desktop-product-list-result-card.component.html',
    styleUrls: ['./desktop-product-list-result-card.component.scss']
})
export class DesktopProductListResultCardComponent implements OnInit, OnDestroy {

    @Input() productList: ProductSummaryDTO[];
    @Input() totalPageCount = 1;
    @Input() selectedPageNumber = 1;
    @Input() selectedSortByOption = SORT_BY_MOST_VIEWED;
    @Input() isLoading = false;
    @Output() sortByChange = new EventEmitter<SortByOption>();
    @Output() pageChange = new EventEmitter<number>();
    ProductSummaryCardTypeEnum = ProductSummaryCardTypeEnum;
    CardLayoutEnum = CardLayoutEnum;
    sortByOptions = [
        SORT_BY_MOST_VIEWED,
        SORT_BY_MOST_POPULAR,
        SORT_BY_NEWEST,
        SORT_BY_BESTSELLING
    ];
    pageNumberList: number[] = [];
    gridColsNumber = 1;
    private mediaWatcher: Subscription;

    constructor(private productListService: ProductListPageService, media: MediaObserver) {
        this.mediaWatcher = media.asObservable().subscribe(() => {
            if (media.isActive('lt-sm')) {
                this.gridColsNumber = 1;
            }
            if (media.isActive('gt-xs')) {
                this.gridColsNumber = 2;
            }
            if (media.isActive('gt-sm')) {
                this.gridColsNumber = 3;
            }
            if (media.isActive('gt-md')) {
                this.gridColsNumber = 4;
            }
            if (media.isActive('gt-lg')) {
                this.gridColsNumber = 4;
            }
        });
    }

    ngOnInit() {
        this.setPageNumberList(1, this.totalPageCount);
    }

    onSortChange(selectedSotByOption: SortByOption) {
        this.sortByChange.emit(selectedSotByOption);
    }

    onPageChange(pageNumber: number) {
        this.selectedPageNumber = pageNumber;
        this.pageChange.emit(pageNumber);
    }

    nextPage() {
        if (this.selectedPageNumber + 1 <= this.totalPageCount) {
            this.onPageChange(this.selectedPageNumber + 1);
        }

    }

    ngOnDestroy(): void {
        this.mediaWatcher.unsubscribe();
    }

    private setPageNumberList(start: number, count: number) {
        this.pageNumberList = Array(count).fill(start, 0, count).map((x, i) => x + i);
    }


}
