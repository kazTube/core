import {Component, OnInit} from '@angular/core';
import {BaseProductListPageComponent} from '../base-product-list-page.component';
import {ProductListPageService} from '../product-list-page.service';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../../../shared/components/search-box/search.service';
import {BreadcrumbItemModel} from '../../../shared/components/desktop-breadcrumb/breadcrumbItemModel';
import {SORT_BY_MOST_VIEWED, SortByOption} from '../../../shared/components/mobile-select-sort-by-pop-up/model/SortByOption';
import {FlatCategoryDTO} from '../../../dto/FlatCategoryDTO';
import {ProductListResponseDTO} from '../../../dto/product/ProductListResponseDTO';
import {MenuService} from '../../../layout/menu/menu.service';

@Component({
    selector: 'app-desktop-product-list-page',
    templateUrl: './desktop-product-list-page.component.html',
    styleUrls: ['./desktop-product-list-page.component.scss']
})
export class DesktopProductListPageComponent extends BaseProductListPageComponent implements OnInit {

    rootCategory: FlatCategoryDTO = null;
    breadcrumbModel: BreadcrumbItemModel[] = null;
    totalPageCount = 1;
    currentPage = 1;

    private currentCategory: FlatCategoryDTO = null;

    constructor(
        productListService: ProductListPageService,
        route: ActivatedRoute,
        searchService: SearchService,
        private menuService: MenuService
    ) {
        super(productListService, route, searchService);
    }

    ngOnInit() {
        super.ngOnInit();
        this.route.paramMap.subscribe(params => {
            this.initialize(+params.get('id'));
        });
        this.route.data.subscribe(data => {
            this.totalPageCount = Math.ceil(data.resolvedData.totalCount / this.productListService.productListPageSize);

        });
    }


    onSearchInCategory(searchText: string) {
        this.searchText = searchText;
        this.getProductList(0).subscribe((productListResponse: ProductListResponseDTO) => {
            this.productList = productListResponse.productList;
            this.currentPage = 1;
        });
    }

    onSortChange(sortByOption: SortByOption) {
        this.sortBy(sortByOption).subscribe(() => {
            this.currentPage = 1;
        });
    }

    onPageChange(pageNumber: number) {
        const offset = (pageNumber - 1) * this.productListService.productListPageSize;
        this.getProductList(offset).subscribe((productListResponse: ProductListResponseDTO) => {
            this.currentPage = pageNumber;
            this.productList = productListResponse.productList;
        });
    }

    private initialize(categoryId: number): void {
        this.currentPage = 1;
        this.selectedSortBy = SORT_BY_MOST_VIEWED;
        this.currentCategory = this.menuService.getFlatCategoryById(categoryId);
        this.setCategoryTreeRoot();
        this.setBreadcrumb();
    }

    private setCategoryTreeRoot() {
        this.rootCategory = (this.currentCategory.parentCategoryList && this.currentCategory.parentCategoryList.length > 0) ?
            this.currentCategory.parentCategoryList[0] :
            this.currentCategory;
    }

    private setBreadcrumb() {
        const breadcrumbList = [new BreadcrumbItemModel('داروخانه آنلاین', '/home')];
        for (const category of this.currentCategory.parentCategoryList) {
            breadcrumbList.push(new BreadcrumbItemModel(category.name, `/product/list/${category.id}`));
        }
        breadcrumbList.push(new BreadcrumbItemModel(this.currentCategory.name, null));
        this.breadcrumbModel = breadcrumbList;
    }


}
