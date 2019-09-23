import {Injectable} from '@angular/core';
import {PersonalInfoDTO} from '../../dto/profile/PersonalInfoDTO';
import {UserProfileDTO} from '../../dto/profile/UserProfileDTO';
import {UtilService} from '../../core/services/util.service';
import {UserProfileService} from '../user-profile.service';
import {shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PersonalInfoFormService {

    formPersonalInfo: PersonalInfoDTO = PersonalInfoDTO.emptyInstance();
    initPersonalInfo: PersonalInfoDTO = PersonalInfoDTO.emptyInstance();
    isPersonalFormValid = false;
    avatar: string;

    constructor(
        public utilService: UtilService,
        public userProfileService: UserProfileService) {
    }

    hasPersonalInfoChanged(): boolean {
        if (this.formPersonalInfo !== undefined && this.initPersonalInfo !== undefined) {
            return !(this.initPersonalInfo.firstName === this.formPersonalInfo.firstName
                && this.initPersonalInfo.lastName === this.formPersonalInfo.lastName
                && this.initPersonalInfo.email === this.formPersonalInfo.email
                && this.initPersonalInfo.isForeignNational === this.formPersonalInfo.isForeignNational
                && this.initPersonalInfo.nationalCode === this.formPersonalInfo.nationalCode
                && this.initPersonalInfo.avatar === this.avatar);
        } else {
            return false;
        }
    }

    canSubmitPersonalInfo(): boolean {
        return this.isPersonalFormValid && this.hasPersonalInfoChanged();
    }

    submitPersonalInfo(): Observable<UserProfileDTO> {
        const userPersonalInfo = new PersonalInfoDTO(
            this.formPersonalInfo.firstName,
            this.formPersonalInfo.lastName,
            this.formPersonalInfo.email,
            this.utilService.convertPersianNumberToEnglishNumber(this.formPersonalInfo.nationalCode),
            this.formPersonalInfo.isForeignNational,
            this.utilService.convertPersianNumberToEnglishNumber(this.formPersonalInfo.invitationCode),
            this.formPersonalInfo.phone,
            this.avatar
        );
        const updateProfile$ = this.userProfileService.updatePersonalInfo(userPersonalInfo).pipe(
            shareReplay(1)
        );
        updateProfile$.subscribe((userProfile: UserProfileDTO) => {
            this.setInitialState(userProfile);
        });
        return updateProfile$;
    }

    submitAvatar(selectedAvatar): Observable<UserProfileDTO> {
        const userPersonalInfo = new PersonalInfoDTO(
            this.initPersonalInfo.firstName,
            this.initPersonalInfo.lastName,
            this.initPersonalInfo.email,
            this.utilService.convertPersianNumberToEnglishNumber(this.initPersonalInfo.nationalCode),
            this.initPersonalInfo.isForeignNational,
            this.utilService.convertPersianNumberToEnglishNumber(this.initPersonalInfo.invitationCode),
            this.initPersonalInfo.phone,
            selectedAvatar
        );
        const updateProfile$ = this.userProfileService.updatePersonalInfo(userPersonalInfo).pipe(
            shareReplay(1)
        );
        updateProfile$.subscribe((userProfile: UserProfileDTO) => {
            this.avatar = selectedAvatar;
        });
        return updateProfile$;
    }

    setInitialState(info: UserProfileDTO | PersonalInfoDTO) {
        this.initPersonalInfo = PersonalInfoDTO.clone(info);
        this.formPersonalInfo = PersonalInfoDTO.clone(info);
        this.avatar = info.avatar;
    }

    resetInitPersonalInfo() {
        this.initPersonalInfo = PersonalInfoDTO.emptyInstance();
        this.avatar = undefined;
    }
}
