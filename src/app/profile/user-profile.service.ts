import {Injectable} from '@angular/core';
import {RestAddresses} from '../core/constants/RestAddresses';
import {AddressDTO} from '../dto/profile/AddressDTO';
import {BehaviorSubject, Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {PersonalInfoDTO} from '../dto/profile/PersonalInfoDTO';
import {UserProfileDTO} from '../dto/profile/UserProfileDTO';

@Injectable({
    providedIn: 'root'
})
export class UserProfileService {
    private _userProfile$: BehaviorSubject<UserProfileDTO> = new BehaviorSubject<UserProfileDTO>(undefined);

    userProfile: UserProfileDTO = null;

    avatarList = [
        'avatar-1',
        'avatar-2',
        'avatar-3',
        'avatar-4',
        'avatar-5',
        'avatar-6',
        'avatar-7',
        'avatar-8'];

    constructor(private httpClient: HttpClient) {
    }


    get userProfile$(): Observable<UserProfileDTO> {
        return this._userProfile$.asObservable();
    }

    updatePersonalInfo(personalInfo: PersonalInfoDTO): Observable<UserProfileDTO> {
        const updatePersonalInfo$ = this.httpClient.post<UserProfileDTO>(RestAddresses.UPDATE_PROFILE, personalInfo).pipe(shareReplay(1));
        updatePersonalInfo$.subscribe(userProfile => this.setUserProfile(userProfile));
        return updatePersonalInfo$;
    }

    addAddress(newAddress: AddressDTO): Observable<boolean> {
        return this.httpClient.post<boolean>(RestAddresses.ADD_ADDRESS, newAddress).pipe(shareReplay(1));
    }

    updateAddress(newAddress: AddressDTO): Observable<boolean> {
        return this.httpClient.post<boolean>(RestAddresses.UPDATE_ADDRESS, newAddress).pipe(shareReplay(1));
    }

    removeAddress(addressId: number): Observable<boolean> {
        return this.httpClient.post<boolean>(RestAddresses.REMOVE_ADDRESS, {addressId: addressId});
    }

    setDefaultAddress(addressId: number): Observable<boolean> {
        return this.httpClient.post<boolean>(RestAddresses.SET_DEFAULT_ADDRESS, {
            addressId: addressId
        }).pipe(shareReplay(1));
    }

    getUserProfile(): Observable<UserProfileDTO> {
        const getProfile$ = this.httpClient.post<UserProfileDTO>(RestAddresses.GET_PROFILE, null).pipe(shareReplay(1));
        getProfile$.subscribe(userProfile => this.setUserProfile(userProfile));
        return getProfile$;
    }

    private setUserProfile(userProfile: UserProfileDTO) {
        userProfile.avatar = this.getValidAvatar(userProfile.avatar);
        this.userProfile = userProfile;
        this._userProfile$.next(userProfile);
    }

    private getValidAvatar(avatar): string {
        if (avatar !== undefined && this.avatarList.includes(avatar)) {
            return avatar;
        } else {
            return 'avatar-3';
        }
    }
}
