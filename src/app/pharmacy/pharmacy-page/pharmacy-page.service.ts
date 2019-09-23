import { Injectable } from '@angular/core';
import { SearchInPharmacyProductsRequestDTO } from '../../dto/pharmacy/SearchInPharmacyProductsRequestDTO';
import { Observable } from 'rxjs';
import { SpecialOfferProductDTO } from '../../dto/pharmacy/SpecialOfferProductDTO';
import { GetPharmacyVitrinRequestDTO } from '../../dto/pharmacy/GetPharmacyVitrinRequestDTO';
import { PharmacyVitrinDTO } from '../../dto/pharmacy/PharmacyVitrinDTO';
import { PharmacyInfoDTO } from '../../dto/pharmacy/PharmacyInfoDTO';
import { HttpClient } from '@angular/common/http';
import { RestAddresses } from '../../core/constants/RestAddresses';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PharmacyPageService {

    pharmacyProductListPageSize = 12;

    constructor(private httpClient: HttpClient) {
    }

    searchInPharmacyProducts(request: SearchInPharmacyProductsRequestDTO): Observable<SpecialOfferProductDTO[]> {
        return this.httpClient.post<SpecialOfferProductDTO[]>(RestAddresses.SEARCH_IN_PHARMACY_PRODUCTS, request);
    }

    getPharmacyVitrin(request: GetPharmacyVitrinRequestDTO): Observable<PharmacyVitrinDTO> {
        return this.httpClient.post<PharmacyVitrinDTO>(RestAddresses.GET_PHARMACY_VITRIN, request);
    }

    getPharmacyInfo(hixCode: number): Observable<PharmacyInfoDTO> {
        return this.httpClient.post<PharmacyInfoDTO>(RestAddresses.GET_PHARMACY_INFO, null,
            { params: { ['HixCode']: String(hixCode) } });
    }

    getPharmacySpecialProductOfferList(productCode: string): Observable<SpecialOfferProductDTO[]> {
        return this.httpClient.post<SpecialOfferProductDTO[]>(RestAddresses.GET_PHARMACY_SPECIAL_OFFER_PRODUCT_LIST,
            {
                productCode: productCode,
                limit: this.pharmacyProductListPageSize,
                offset: 0
            }
        ).pipe(map((result: any) => result.productList));
    }

    getSpecialOfferProductByCode(productCode: string): Observable<SpecialOfferProductDTO> {
        return this.httpClient.post<SpecialOfferProductDTO>(RestAddresses.GET_PRODUCT_BY_CODE, { productCode: productCode });
    }

    subscribeToPharmacy(invitationCode: string): Observable<boolean> {
        return this.httpClient.post<boolean>(RestAddresses.SUBSCRIBE_TO_PHARMACY, {
            InvitationCode: invitationCode
        });
    }

    isUnsubscriptionAllowed(): Observable<boolean> {
        return this.httpClient.post<boolean>(RestAddresses.IS_UNSUBSCRIPTION_ALLOWED, null);
    }
}
