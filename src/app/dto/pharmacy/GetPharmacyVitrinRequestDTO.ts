export class GetPharmacyVitrinRequestDTO {
    pharmacyHixCode: number;
    limit = 8;
    offset: number;
    sortBy: number;


    constructor(pharmacyHixCode: number, limit: number, offset: number, sortBy: number) {
        this.pharmacyHixCode = pharmacyHixCode;
        this.limit = limit;
        this.offset = offset;
        this.sortBy = sortBy;
    }
}
