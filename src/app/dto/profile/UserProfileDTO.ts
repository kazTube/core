import {AddressDTO} from './AddressDTO';
import {PersonalInfoDTO} from './PersonalInfoDTO';

export class UserProfileDTO extends PersonalInfoDTO {
    userId: number;
    hasProfile: boolean;
    hasAddress: boolean;
    addressList: AddressDTO[];

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        nationalCode: string,
        isForeignNational: boolean,
        inventionCode: string,
        phone: string,
        avatar: string,
        userId: number,
        hasProfile: boolean,
        hasAddress: boolean,
        addressList: AddressDTO[]
    ) {
        super(firstName, lastName, email, nationalCode, isForeignNational, inventionCode, phone, avatar);
        this.userId = userId;
        this.hasProfile = hasProfile;
        this.hasAddress = hasAddress;
        this.addressList = addressList;
    }
}
