import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {forkJoin, Observable, of} from 'rxjs';
import {ProductListPageService} from './product-list-page.service';
import {GetProductListRequestDTO} from '../../dto/product/GetProductListRequestDTO';
import {ProductInfoDTO} from '../../dto/product/ProductInfoDTO';
import {GetRelatedProductListRequestDTO} from '../../dto/product/GetRelatedProductListRequestDTO';
import {catchError, map} from 'rxjs/operators';
import {RoutingService} from '../../routing/routing.service';
import {SearchInCategoryRequestDTO} from '../../dto/search/SearchInCategoryRequestDTO';
import {SearchService} from '../../shared/components/search-box/search.service';
import {ProductListResponseDTO} from '../../dto/product/ProductListResponseDTO';

@Injectable()
export class ProductListPageResolver implements Resolve<any> {

    constructor(private productListService: ProductListPageService,
                private searchService: SearchService,
                private  router: Router,
                private routingService: RoutingService
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductInfoDTO[]> | Promise<any> | any {
        const categoryId = +route.params.id;
        const searchText = route.params.initialSearchText;

        let productList: Observable<ProductListResponseDTO> = of(null);
        // if it is a search in product list of a category
        if (searchText && searchText.length > 0) {
            const request = new SearchInCategoryRequestDTO(categoryId, searchText, this.productListService.productListPageSize, 0, 1);
            productList = this.searchService.searchInCategory(request);
        } else {   // if it is product list of a category
            const request = new GetProductListRequestDTO(route.params.id, this.productListService.productListPageSize, 0, 1);
            productList = this.productListService.getProductList(request);
        }
        const relatedRequest = new GetRelatedProductListRequestDTO(categoryId, this.productListService.similarProductPageSize);
        const relatedProductList = this.productListService.getRelatedProductList(relatedRequest);
        return forkJoin(productList, relatedProductList).pipe(
            map(data => {
                return {
                    productList: data[0].productList,
                    totalCount: data[0].totalCount,
                    relatedProductList: data[1],
                    searchText: searchText
                };
            }),
            catchError(() => {
                // to prevent error loop
                if (this.router.url === this.routingService.getLastSuccessfulRouteUrl()) {
                    this.router.navigateByUrl('/home');
                } else {
                    this.router.navigateByUrl(this.routingService.getLastSuccessfulRouteUrl());
                }
                return of(null);
            })
        );
    }
}
