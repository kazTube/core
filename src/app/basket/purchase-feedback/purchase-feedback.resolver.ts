import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {forkJoin, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {PurchaseFeedbackService} from './purchase-feedback.service';
import {RoutingService} from '../../routing/routing.service';
import {PredefinedCommentListDTO} from '../../dto/basket/PredefinedCommentListDTO';

@Injectable()
export class PurchaseFeedbackResolver implements Resolve<any> {

    constructor(
        public purchaseFeedbackService: PurchaseFeedbackService,
        private router: Router,
        private routingService: RoutingService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<number> | Promise<any> | any {

        const rate1$ = this.purchaseFeedbackService.getPreDefinedCommentList(1);
        const rate2$ = this.purchaseFeedbackService.getPreDefinedCommentList(2);
        const rate3$ = this.purchaseFeedbackService.getPreDefinedCommentList(3);
        const rate4$ = this.purchaseFeedbackService.getPreDefinedCommentList(4);
        const rate5$ = this.purchaseFeedbackService.getPreDefinedCommentList(5);
        return forkJoin(rate1$, rate2$, rate3$, rate4$, rate5$).pipe(
            map((data: PredefinedCommentListDTO[]) => [
                data[0].predefinedCommentList,
                data[1].predefinedCommentList,
                data[2].predefinedCommentList,
                data[3].predefinedCommentList,
                data[4].predefinedCommentList,
            ]),
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
