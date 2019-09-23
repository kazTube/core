export class PersonalInfoDTO {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    nationalCode: string;
    isForeignNational: boolean;
    invitationCode: string;
    avatar: string;


    constructor(
        firstName: string,
        lastName: string,
        email: string,
        nationalCode: string,
        isForeignNational: boolean,
        invitationCode: string,
        phone?: string,
        avatar?: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.nationalCode = nationalCode;
        this.isForeignNational = isForeignNational;
        this.invitationCode = invitationCode;
        this.phone = phone ? phone : '';
        this.avatar = avatar ? avatar : 'avatar-3';
    }

    public static clone(personalInfo: PersonalInfoDTO) {
        return new PersonalInfoDTO(
            personalInfo.firstName,
            personalInfo.lastName,
            personalInfo.email,
            personalInfo.nationalCode,
            personalInfo.isForeignNational,
            personalInfo.invitationCode,
            personalInfo.phone,
            personalInfo.avatar
        );
    }

    public static emptyInstance() {
        return new PersonalInfoDTO(
            undefined,
            undefined,
            undefined,
            undefined,
            false,
            undefined,
            undefined,
            undefined,
        );
    }
}
