import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { RestAddresses } from '../core/constants/RestAddresses';
import { shareReplay } from 'rxjs/operators';

const TOKEN_LOCAL_STORAGE_KEY = 'Token';


@Injectable({
    providedIn: 'root'
})

export class LoginService {

    redirectUrl = '/home';
    private _userLoggedIn$ = new BehaviorSubject(false);

    get userLoggedIn$(): Observable<boolean> {
        return this._userLoggedIn$.asObservable();
    }

    constructor(private httpClient: HttpClient) {
    }

    private _userLoggedOut$ = new BehaviorSubject(false);

    get userLoggedOut$(): Observable<boolean> {
        return this._userLoggedOut$.asObservable();
    }

    isUserLoggedIn(): boolean {
        return localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY) !== undefined
            && localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY) !== null;
    }

    logoutUser() {
        localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);
        this._userLoggedOut$.next(true);
        this._userLoggedOut$.complete();
    }

    sendLoginCode(phone: string): Observable<boolean> {
        return this.httpClient.post<boolean>(RestAddresses.OTP, { phone: phone });
    }

    verifyLoginCode(phone: string, code: string): Observable<string> {
        return this.httpClient.post<string>(RestAddresses.LOGIN, { phone: phone, code: code })
            .pipe(shareReplay(1));
    }

    publishUserLoggedInEvent() {
        this._userLoggedIn$.next(true);
        this._userLoggedIn$.complete();
    }

    saveToken(token: string) {
        localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, token);
    }

}
