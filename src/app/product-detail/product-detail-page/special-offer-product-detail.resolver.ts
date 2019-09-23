import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {forkJoin, Observable, of} from 'rxjs';
import {ProductInfoDTO} from '../../dto/product/ProductInfoDTO';
import {PharmacyPageService} from '../../pharmacy/pharmacy-page/pharmacy-page.service';
import {catchError, map} from 'rxjs/operators';
import {RoutingService} from '../../routing/routing.service';

@Injectable()
export class SpecialOfferProductDetailResolver implements Resolve<any> {

    constructor( private pharmacyPageService: PharmacyPageService, private router: Router, private routingService: RoutingService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductInfoDTO[]> | Promise<any> | any {
        const productCode = route.params.code;
        const hixCode = +route.params.hixCode;

        const specialOfferProduct = this.pharmacyPageService.getSpecialOfferProductByCode(productCode);
        const pharmacyInfo = this.pharmacyPageService.getPharmacyInfo(hixCode);
        const specialOfferProductList = this.pharmacyPageService.getPharmacySpecialProductOfferList(productCode);

        return forkJoin(specialOfferProduct, pharmacyInfo, specialOfferProductList).pipe(
            map(data => {
                return{
                    specialOfferProduct: data[0],
                    pharmacyInfo: data[1],
                    specialOfferProductList: data[2]
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
