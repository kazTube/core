import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {forkJoin, Observable, of} from 'rxjs';
import {UserHomePageInfoDTO} from '../../dto/UserHomePageInfoDTO';
import {PharmacyPageService} from './pharmacy-page.service';
import {SORT_BY_MOST_VIEWED} from '../../shared/components/mobile-select-sort-by-pop-up/model/SortByOption';
import {GetPharmacyVitrinRequestDTO} from '../../dto/pharmacy/GetPharmacyVitrinRequestDTO';
import {catchError, map} from 'rxjs/operators';
import {RoutingService} from '../../routing/routing.service';
import {UserProfileService} from '../../profile/user-profile.service';

@Injectable()
export class PharmacyPageResolver implements Resolve<any> {

    constructor(
        private pharmacyPageService: PharmacyPageService,
        private userProfileService: UserProfileService,
        private router: Router,
        private routingService: RoutingService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserHomePageInfoDTO> | Promise<any> | any {
        const hixCode = +route.paramMap.get('hixCode');
        const request = new GetPharmacyVitrinRequestDTO(hixCode,
            this.pharmacyPageService.pharmacyProductListPageSize, 0, SORT_BY_MOST_VIEWED.id);

        const pharmacyVitrin$ = this.pharmacyPageService.getPharmacyVitrin(request);
        const isMemberOfAnyPharmacy$ = this.userProfileService.getUserProfile().pipe(
            map(userProfile => {
                return userProfile.invitationCode && userProfile.invitationCode.length > 0;
            })
        );
        return forkJoin(pharmacyVitrin$, isMemberOfAnyPharmacy$).pipe(
            map(data => {
                return {
                    pharmacyInfo: data[0].pharmacy,
                    SpecialOfferProductList: data[0].productList,
                    isCustomerClubMember: false, // data[0].isCustomerClubMember,
                    isMemberOfAnyPharmacy: false, // data[1]
                };
            }),
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
