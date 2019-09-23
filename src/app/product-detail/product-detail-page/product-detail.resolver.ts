import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {forkJoin, Observable, of} from 'rxjs';
import {ProductInfoDTO} from '../../dto/product/ProductInfoDTO';
import {ProductDetailService} from './product-detail.service';
import {GetSimilarProductListRequestDTO} from '../../dto/product/GetSimilarProductListRequestDTO';
import {catchError, map} from 'rxjs/operators';
import {RoutingService} from '../../routing/routing.service';

@Injectable()
export class ProductDetailResolver implements Resolve<any> {

    constructor(private productDetailService: ProductDetailService, private router: Router, private routingService: RoutingService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductInfoDTO[]> | Promise<any> | any {
        const productCode = route.params.code;
        const product = this.productDetailService.getProductByCode(productCode);
        const similarRequest = new GetSimilarProductListRequestDTO(productCode, this.productDetailService.relatedProductPageSize);
        const similarProductList =  this.productDetailService.getSimilarProductList(similarRequest);
        return forkJoin(product, similarProductList).pipe(
            map(data => {
                return {
                    product: data[0],
                    similarProductList: data[1]
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
