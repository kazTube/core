import {AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild} from '@angular/core';
import {fromEvent, Observable, Subject} from 'rxjs';
import {debounceTime, map, switchMap, takeUntil} from 'rxjs/operators';
import {SearchService} from './search.service';
import {SearchResultDTO} from '../../../dto/search/SearchResultDTO';
import {ProductSearchResultDTO} from '../../../dto/search/ProductSearchResultDTO';
import {CategorySearchResultDTO} from '../../../dto/search/CategorySearchResultDTO';
import {Router} from '@angular/router';
import {MatOptionSelectionChange} from '@angular/material';
import {UtilService} from '../../../core/services/util.service';
import {AppStateService} from '../../../core/services/app-state.service';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements AfterViewInit, OnDestroy {

    @ViewChild('inputBox') inputBox: ElementRef;

    isSearching: Boolean = false;
    unsubscribe$: Subject<void> = new Subject();

    constructor(
        private utilService: UtilService,
        private searchService: SearchService,
        private router: Router,
        public appStateService: AppStateService,
        private ngZone: NgZone
    ) {
    }

    ngAfterViewInit() {
        this.startObservingInputBox();
    }

    searchInCategory(event: MatOptionSelectionChange, category: CategorySearchResultDTO) {
        if (event.source && event.source.selected && category) {
            this.searchService.searchText = '';
            this.clearInputFocus();
            this.router.navigate(['product/list/' + category.categoryId, {initialSearchText: this.searchService.searchText}]);
        }
    }

    showProductDetails(event: MatOptionSelectionChange, product: ProductSearchResultDTO) {
        if (event.source && event.source.selected && product) {
            this.searchService.searchText = '';
            this.clearInputFocus();
            this.router.navigateByUrl('product/detail/' + product.productCode);
        }
    }

    showNewProductDetails(event: MatOptionSelectionChange, productName: string) {
        if (event.source && event.source.selected && productName) {
            this.searchService.searchText = '';
            this.clearInputFocus();
            this.router.navigate(['product/detail/new'], {queryParams: {'productName': productName}});
        }
    }

    // todo this should be fixed
    showAllResult(event: any) {
        this.router.navigateByUrl('/showAllResults');
        event.stopPropagation();
        event.preventDefault();
    }

    inputFocus() {
        if (!this.searchService.searchText || this.searchService.searchText.length === 0) {
            if (!this.searchService.topProductList || this.searchService.topProductList.length === 0) {
                this.isSearching = true;
                this.searchService.getTopProductList().subscribe(
                    topProductList => {
                        this.isSearching = false;
                        this.searchService.topProductList = topProductList;
                        this.searchService.autoCompleteToShow = 'TOP';
                    },
                    () => this.handleSearchError()
                );
            } else {
                this.searchService.autoCompleteToShow = 'TOP';
            }
        } else if (this.searchService.autoCompleteToShow !== 'NONE') {
            if (this.searchService.searchResult.count > 0) {
                this.searchService.autoCompleteToShow = 'RESULT';
            } else {
                this.searchService.autoCompleteToShow = 'NOT_FOUND';
            }
        }
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    clearInputFocus() {
        this.ngZone.runOutsideAngular(() => {
            setTimeout(() => this.inputBox.nativeElement.blur(), 0);
        });
    }

    private search(value: string): Observable<SearchResultDTO> | Promise<any> {
        if (value.length === 0) {
            return Promise.resolve(undefined);
        }
        return this.searchService.search(value);
    }

    private startObservingInputBox() {
        fromEvent(this.inputBox.nativeElement, 'input')
            .pipe(
                map((event: any) => {
                    this.isSearching = true;
                    if (event.target.value !== undefined) {
                        this.searchService.searchText = event.target.value;
                    }
                    return event.target.value;
                }),
                debounceTime(250),
                switchMap(value => this.search(value)),
                takeUntil(this.unsubscribe$)
            ).subscribe(
            (data: SearchResultDTO) => {
                this.isSearching = false;
                this.searchService.searchResult = data;
                if (data) {
                    if (data.count > 0) {
                        this.searchService.autoCompleteToShow = 'RESULT';
                    } else {
                        this.searchService.autoCompleteToShow = 'NOT_FOUND';
                    }
                } else {
                    this.searchService.autoCompleteToShow = 'NONE';
                }
            },
            () => {
                this.handleSearchError();
            }
        )
        ;
    }

    private handleSearchError() {
        this.isSearching = false;
        this.searchService.autoCompleteToShow = 'NONE';
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.unsubscribe$ = new Subject();
        this.startObservingInputBox();
    }
}
