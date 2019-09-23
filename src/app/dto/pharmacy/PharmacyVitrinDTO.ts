import {PharmacyInfoDTO} from './PharmacyInfoDTO';
import {SpecialOfferProductDTO} from './SpecialOfferProductDTO';

export class PharmacyVitrinDTO {
    pharmacy: PharmacyInfoDTO;
    isCustomerClubMember: boolean;
    productList: SpecialOfferProductDTO[];

    constructor(pharmacy: PharmacyInfoDTO, isCustomerClubMember: boolean, productList: SpecialOfferProductDTO[]) {
        this.pharmacy = pharmacy;
        this.isCustomerClubMember = isCustomerClubMember;
        this.productList = productList;
    }
}
