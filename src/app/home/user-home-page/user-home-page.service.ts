import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserHomePageInfoDTO} from '../../dto/UserHomePageInfoDTO';
import {RestAddresses} from '../../core/constants/RestAddresses';

@Injectable({
    providedIn: 'root'
})
export class UserHomePageService {

    constructor(private httpClient: HttpClient) {
    }

    getMainPage(latitude: number, longitude: number): Observable<UserHomePageInfoDTO> {
        return this.httpClient.post<UserHomePageInfoDTO>(RestAddresses.GET_MAIN_PAGE, {
            latitude: latitude,
            longitude: longitude
        });
    }
}
