export class PharmacyInfoDTO {
    pharmacyHixCode: number;
    name: string;
    manager: string;
    tel: string;
    address: string;
    latitude: number;
    longitude: number;
    imageThumbnail: string;
    imageBackground: string;
    rate: number;


    constructor(pharmacyHixCode: number, name: string, manager: string, tel: string,
                address: string, latitude: number, longitude: number, imageThumbnail: string, imageBackground: string, rate: number) {
        this.pharmacyHixCode = pharmacyHixCode;
        this.name = name;
        this.manager = manager;
        this.tel = tel;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
        this.imageThumbnail = imageThumbnail;
        this.imageBackground = imageBackground;
        this.rate = rate;
    }
}
