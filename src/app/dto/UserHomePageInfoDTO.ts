import {SpecialOfferProductDTO} from './pharmacy/SpecialOfferProductDTO';
import {PharmacyInfoDTO} from './pharmacy/PharmacyInfoDTO';

export class UserHomePageInfoDTO {
    pharmacy: PharmacyInfoDTO;
    productList: SpecialOfferProductDTO[];
    productListSlider: SpecialOfferProductDTO[];


    constructor(pharmacy: PharmacyInfoDTO, productList: SpecialOfferProductDTO[], productListSlider: SpecialOfferProductDTO[]) {
        this.pharmacy = pharmacy;
        this.productList = productList;
        this.productListSlider = productListSlider;
    }
}
