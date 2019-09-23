export class AddressDTO {
    addressId: number;
    cityId: number;
    stateId: number;
    addressText: string;
    postalCode: string;
    latitude: number;
    longitude: number;
    receiverName: string;
    receiverPhone: string;
    unit: string;
    plaqueNumber: string;


    constructor(
        addressId: number,
        cityId: number,
        stateId: number,
        addressText: string,
        postalCode: string,
        latitude: number,
        longitude: number,
        receiverName: string,
        receiverPhone: string,
        unit: string,
        plaqueNumber: string) {
        this.addressId = addressId;
        this.cityId = cityId;
        this.stateId = stateId;
        this.addressText = addressText;
        this.postalCode = postalCode;
        this.latitude = latitude;
        this.longitude = longitude;
        this.receiverName = receiverName;
        this.receiverPhone = receiverPhone;
        this.unit = unit;
        this.plaqueNumber = plaqueNumber;
    }

    public static clone(address: AddressDTO) {
        return new AddressDTO(
            address.addressId,
            address.cityId,
            address.stateId,
            address.addressText,
            address.postalCode,
            address.latitude,
            address.longitude,
            address.receiverName,
            address.receiverPhone,
            address.unit,
            address.plaqueNumber
        );
    }

    public static emptyInstance() {
        return new AddressDTO(
            undefined,
            -1,
            -1,
            '',
            '',
            undefined,
            undefined,
            '',
            '',
            '',
            ''
        );
    }

    public static copyValue(srcAddress: AddressDTO, dstAddress: AddressDTO) {
        srcAddress.addressId = dstAddress.addressId;
        srcAddress.cityId = dstAddress.cityId;
        srcAddress.stateId = dstAddress.stateId;
        srcAddress.addressText = dstAddress.addressText;
        srcAddress.postalCode = dstAddress.postalCode;
        srcAddress.latitude = dstAddress.latitude;
        srcAddress.longitude = dstAddress.longitude;
        srcAddress.receiverName = dstAddress.receiverName;
        srcAddress.receiverPhone = dstAddress.receiverPhone;
        srcAddress.unit = dstAddress.unit;
        srcAddress.plaqueNumber = dstAddress.plaqueNumber;
        return srcAddress;
    }


}
