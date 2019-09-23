import {Component, OnInit} from '@angular/core';
import {BaseProductListPageComponent} from '../base-product-list-page.component';
import {ProductListPageService} from '../product-list-page.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';
import {SearchService} from '../../../shared/components/search-box/search.service';
import {MobileSelectSortByPopUpComponent} from '../../../shared/components/mobile-select-sort-by-pop-up/mobile-select-sort-by-pop-up.component';
import {MatProgressButtonOptions} from 'mat-progress-buttons';
import {ProductListResponseDTO} from '../../../dto/product/ProductListResponseDTO';

@Component({
    selector: 'app-mobile-product-list-page',
    templateUrl: './mobile-product-list-page.component.html',
    styleUrls: ['./mobile-product-list-page.component.scss']
})
export class MobileProductListPageComponent extends BaseProductListPageComponent implements OnInit {

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
    hasMore = true;
    private offset = 0;


    constructor(productListService: ProductListPageService,
                route: ActivatedRoute,
                searchService: SearchService,
                private dialog: MatDialog) {
        super(productListService, route, searchService);

    }

    ngOnInit() {
        super.ngOnInit();
        this.route.data.subscribe(data => {
            this.hasMore = data.resolvedData.productList.length < data.resolvedData.totalCount;

        });

    }


    loadMoreProduct() {
        const offset = this.offset + this.productListService.productListPageSize;
        this.loadMoreButtonOptions.active = true;
        this.getProductList(offset)
            .subscribe((productListResponse: ProductListResponseDTO) => {
                    this.productList = this.productList.concat(productListResponse.productList);
                    this.offset = offset;
                    this.loadMoreButtonOptions.active = false;
                    this.hasMore = this.productList.length < this.totalCount;
                },
                () => this.loadMoreButtonOptions.active = false);
    }

    openSortByDialog() {
        const dialogRef = this.dialog.open(MobileSelectSortByPopUpComponent, {
            minWidth: '250px',
            data: this.selectedSortBy.id
        });

        dialogRef.afterClosed().subscribe(sortByOption => {
            if (sortByOption) {
                this.sortBy(sortByOption).subscribe(() => {
                    this.offset = 0;
                });
            }
        });
    }

}
