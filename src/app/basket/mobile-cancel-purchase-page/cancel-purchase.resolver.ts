import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CancelPurchaseService} from '../cancel-purchase/cancel-purchase.service';
import {catchError, map} from 'rxjs/operators';
import {RoutingService} from '../../routing/routing.service';
import {PredefinedCommentListDTO} from '../../dto/basket/PredefinedCommentListDTO';

@Injectable()
export class CancelPurchaseResolver implements Resolve<any> {

    constructor(
        private cancelPurchaseService: CancelPurchaseService,
        private router: Router,
        private routingService: RoutingService
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<number> | Promise<any> | any {
        return this.cancelPurchaseService.getCanceledPreDefinedCommentList().pipe(
            map((data: PredefinedCommentListDTO) => data.predefinedCommentList),
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
