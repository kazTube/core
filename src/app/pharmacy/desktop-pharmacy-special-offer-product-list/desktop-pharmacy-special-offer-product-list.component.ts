import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {ProductSummaryCardTypeEnum} from '../../dto/product/ProductSummaryCardTypeEnum';
import {CardLayoutEnum} from '../../dto/CardLayoutEnum';
import {
    SORT_BY_BESTSELLING,
    SORT_BY_MOST_POPULAR,
    SORT_BY_MOST_VIEWED,
    SORT_BY_NEWEST,
    SortByOption
} from '../../shared/components/mobile-select-sort-by-pop-up/model/SortByOption';
import {fromEvent, Subject} from 'rxjs';
import {MediaObserver} from '@angular/flex-layout';
import {SpecialOfferProductSummaryDTO} from '../../dto/pharmacy/SpecialOfferProductSummaryDTO';
import {debounceTime, distinctUntilChanged, map, takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-desktop-pharmacy-special-offer-product-list',
    templateUrl: './desktop-pharmacy-special-offer-product-list.component.html',
    styleUrls: ['./desktop-pharmacy-special-offer-product-list.component.scss']
})
export class DesktopPharmacySpecialOfferProductListComponent implements OnInit, AfterViewInit, OnDestroy {

    @Input() specialOfferProductList: SpecialOfferProductSummaryDTO[];
    @Input() pageCount = 1;
    @Input() selectedPageNumber = 1;
    @Input() selectedSortByOption: SortByOption = SORT_BY_MOST_VIEWED;
    @Input() isLoading = false;
    @Output() sortByChange = new EventEmitter<SortByOption>();
    @Output() pageChange = new EventEmitter<number>();
    @Output() searchInPharmacy = new EventEmitter<string>();
    @ViewChild('pharmacySearchInput') pharmacySearchInput: ElementRef;
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
    searchText: string;
    private unsubscribe$ = new Subject();

    constructor(media: MediaObserver) {
        media.asObservable().pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            if (media.isActive('lt-sm')) {
                this.gridColsNumber = 2;
            }
            if (media.isActive('gt-xs')) {
                this.gridColsNumber = 3;
            }
            if (media.isActive('gt-sm')) {
                this.gridColsNumber = 4;
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
        this.setPageNumberList(1, this.pageCount);
    }

    ngAfterViewInit(): void {
        this.startObservingInputBox();
    }

    startObservingInputBox() {
        fromEvent(this.pharmacySearchInput.nativeElement, 'input')
            .pipe(
                map((event: any) => {
                    if (event.target.value !== undefined) {
                        this.searchText = event.target.value;
                    }
                    return event.target.value;
                }),
                debounceTime(800),
                distinctUntilChanged(),
                takeUntil(this.unsubscribe$)
            )
            .subscribe(searchText => {
                this.searchInPharmacy.emit(searchText);
            });
    }

    onSortChange(selectedSotByOption: SortByOption) {
        this.sortByChange.emit(selectedSotByOption);
    }

    onPageChange(pageNumber: number) {
        this.selectedPageNumber = pageNumber;
        this.pageChange.emit(pageNumber);
    }

    nextPage() {
        if (this.selectedPageNumber + 1 <= this.pageCount) {
            this.onPageChange(this.selectedPageNumber + 1);
        }

    }

    setPageNumberList(start: number, count: number) {
        this.pageNumberList = Array(count).fill(start, 0, count).map((x, i) => x + i);

    }

    ngOnDestroy(): void {
        this.unsubscribe$.next(true);
        this.unsubscribe$.unsubscribe();
    }


}
