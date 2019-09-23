import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UserHomePageService} from './user-home-page.service';
import {catchError, flatMap, map} from 'rxjs/operators';
import {RoutingService} from '../../routing/routing.service';
import {UserHomePageInfoDTO} from '../../dto/UserHomePageInfoDTO';
import {LocationModel} from '../../dto/LocationModel';
import {UtilService} from '../../core/services/util.service';

@Injectable()
export class UserHomePageResolver implements Resolve<any> {

    constructor(private userHomePageService: UserHomePageService,
                private router: Router, private routingService: RoutingService,
                private utilService: UtilService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserHomePageInfoDTO> | Promise<any> | any {

        return this.utilService.getCurrentLocation().pipe(
            catchError(() => {
                return of(new LocationModel(0, 0));
            })
            , flatMap(position => {
                return this.userHomePageService.getMainPage(position.latitude, position.longitude);
            })
            ,
            map(data => {
                return {
                    userHomePageInfo: data,
                };
            }),
            catchError(() => {
                // to prevent error loop
                // it should be '/general/home' instead of /home
                if (this.router.url === this.routingService.getLastSuccessfulRouteUrl()) {
                    this.router.navigate(['/home/general/']);
                } else {
                    this.router.navigateByUrl(this.routingService.getLastSuccessfulRouteUrl());
                }
                return of(null);
            })
        );


    }


}
