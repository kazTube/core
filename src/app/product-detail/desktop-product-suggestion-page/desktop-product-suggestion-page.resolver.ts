import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {forkJoin, Observable, of} from 'rxjs';
import {ProductInfoDTO} from '../../dto/product/ProductInfoDTO';
import {catchError, map} from 'rxjs/operators';
import {RoutingService} from '../../routing/routing.service';
import {ProductDetailService} from '../product-detail-page/product-detail.service';
import {GetRelatedProductListRequestDTO} from '../../dto/product/GetRelatedProductListRequestDTO';

@Injectable()
export class DesktopProductSuggestionPageResolver implements Resolve<any> {

    constructor(private productDetailService: ProductDetailService, private router: Router, private routingService: RoutingService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductInfoDTO[]> | Promise<any> | any {
        const productCode = route.params.code;
        const categoryId = +route.params.id;
        const product = this.productDetailService.getProductByCode(productCode);
        const relatedRequest = new GetRelatedProductListRequestDTO(categoryId, this.productDetailService.relatedProductPageSize);
        const relatedProductList = this.productDetailService.getRelatedProductList(relatedRequest);
        const bestSellingProductList = this.productDetailService.getBestSellingProductList();
        const youMayNeedProductList = this.productDetailService.getYouMayNeedProductList();

        return forkJoin(product, relatedProductList, bestSellingProductList, youMayNeedProductList).pipe(
            map(data => {
                return {
                    product: data[0],
                    relatedProductList: data[1],
                    bestSellingProductList: data[2],
                    youMayNeedProductList: data[3]
                };
            })
            ,
            catchError(error => {
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
