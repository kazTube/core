export class SearchInPharmacyProductsRequestDTO {
    pharmacyHixCode: number;
    phrase: string;
    limit = 8;
    offset: number;
    sortBy: number;


    constructor(pharmacyHixCode: number, phrase: string, limit: number, offset: number, sortBy: number) {
        this.pharmacyHixCode = pharmacyHixCode;
        this.phrase = phrase;
        this.limit = limit;
        this.offset = offset;
        this.sortBy = sortBy;
    }
}
