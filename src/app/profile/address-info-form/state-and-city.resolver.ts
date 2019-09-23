import {Injectable} from '@angular/core';
import {forkJoin} from 'rxjs';
import {StateDTO} from '../../dto/profile/StateDTO';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {StateAndCity} from './StateAndCity';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {RestAddresses} from '../../core/constants/RestAddresses';
import {CityDTO} from '../../dto/profile/CityDTO';

@Injectable({
    providedIn: 'root'
})
export class StateAndCityResolver implements Resolve<StateAndCity> {

    constructor(private httpClient: HttpClient) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | null {
        const stateList$ = this.httpClient.post<StateDTO[]>(RestAddresses.GET_STATE_LIST, null);
        const cityList$ = this.httpClient.post<CityDTO[]>(RestAddresses.GET_CITY_LIST, {});
        return forkJoin(stateList$, cityList$).pipe(map((resultList: any) => {
            return {
                stateList: resultList[0],
                cityList: resultList[1],
            };
        }));
    }
}
