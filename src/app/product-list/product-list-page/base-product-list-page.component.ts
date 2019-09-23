import {Component, OnInit} from '@angular/core';
import {ProductListPageService} from './product-list-page.service';
import {GetProductListRequestDTO} from '../../dto/product/GetProductListRequestDTO';
import {ActivatedRoute} from '@angular/router';
import {SORT_BY_MOST_VIEWED, SortByOption} from '../../shared/components/mobile-select-sort-by-pop-up/model/SortByOption';
import {Observable} from 'rxjs';
import {ProductSummaryDTO} from '../../dto/product/ProductSummaryDTO';
import {SearchInCategoryRequestDTO} from '../../dto/search/SearchInCategoryRequestDTO';
import {SearchService} from '../../shared/components/search-box/search.service';
import {ProductSummaryCardTypeEnum} from '../../dto/product/ProductSummaryCardTypeEnum';
import {CardLayoutEnum} from '../../dto/CardLayoutEnum';
import {shareReplay} from 'rxjs/operators';
import {ProductListResponseDTO} from '../../dto/product/ProductListResponseDTO';

@Component({
    template: '',
})
export class BaseProductListPageComponent implements OnInit {


    productList: ProductSummaryDTO[] = [];
    totalCount: number;
    relatedProductList: ProductSummaryDTO[] = [];
    selectedSortBy: SortByOption = SORT_BY_MOST_VIEWED;
    searchText: string;
    isLoading = false;
    ProductSummaryCardTypeEnum = ProductSummaryCardTypeEnum;
    CardLayoutEnum = CardLayoutEnum;

    protected categoryId: number;

    constructor(
        protected productListService: ProductListPageService,
        protected route: ActivatedRoute,
        protected searchService: SearchService,
    ) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.categoryId = +params.get('id');
        });
        this.route.data.subscribe(data => {
            this.productList = data.resolvedData.productList;
            this.totalCount = data.resolvedData.totalCount;
            this.relatedProductList = data.resolvedData.relatedProductList;
            this.searchText = data.resolvedData.searchText;
            this.isLoading = false;
        });

    }


    protected getProductList(offset: number): Observable<ProductListResponseDTO> {
        this.isLoading = true;
        const getProductList$ = this.getProductListRequest(offset).pipe(shareReplay(1));
        getProductList$.subscribe(result => {
            this.isLoading = false;
            this.totalCount = result.totalCount;
        }, () => {
            this.isLoading = false;
        });
        return getProductList$;
    }

    protected sortBy(sortByOption: SortByOption): Observable<ProductListResponseDTO> {
        this.isLoading = true;
        const sortBy$ = this.getSortByRequest(sortByOption).pipe(shareReplay(1));
        sortBy$.subscribe((productListResponse: ProductListResponseDTO) => {
                this.productList = productListResponse.productList;
                this.totalCount = productListResponse.totalCount;
                this.isLoading = false;
                this.selectedSortBy = sortByOption;
            },
            () => this.isLoading = false
        );
        return sortBy$;
    }

    private getSortByRequest(sortByOption: SortByOption): Observable<ProductListResponseDTO> {
        if (this.isSearchInCategory()) {
            const request = new SearchInCategoryRequestDTO(this.categoryId, this.searchText, this.productListService.productListPageSize,
                0, sortByOption.id);
            return this.searchService.searchInCategory(request);
        } else {
            const request = new GetProductListRequestDTO(this.categoryId, this.productListService.productListPageSize,
                0, sortByOption.id);
            return this.productListService.getProductList(request);
        }
    }


    private getProductListRequest(offset: number): Observable<ProductListResponseDTO> {
        if (this.isSearchInCategory()) {
            const searchInCategoryRequest = new SearchInCategoryRequestDTO(this.categoryId,
                this.searchText, this.productListService.productListPageSize, offset, this.selectedSortBy.id);
            return this.searchService.searchInCategory(searchInCategoryRequest);
        } else {
            const request = new GetProductListRequestDTO(this.categoryId, this.productListService.productListPageSize,
                offset, this.selectedSortBy.id);
            return this.productListService.getProductList(request);
        }
    }

    private isSearchInCategory(): boolean {
        return this.searchText && this.searchText.length > 0;
    }


}
