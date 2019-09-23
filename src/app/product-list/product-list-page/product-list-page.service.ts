import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GetProductListRequestDTO} from '../../dto/product/GetProductListRequestDTO';
import {GetRelatedProductListRequestDTO} from '../../dto/product/GetRelatedProductListRequestDTO';
import {RestAddresses} from '../../core/constants/RestAddresses';
import {Observable} from 'rxjs';
import {ProductSummaryDTO} from '../../dto/product/ProductSummaryDTO';
import {ProductListResponseDTO} from '../../dto/product/ProductListResponseDTO';

@Injectable({
    providedIn: 'root'
})
export class ProductListPageService {

    productListPageSize = 12;
    similarProductPageSize = 6;


    constructor(private httpClient: HttpClient) {
    }

    getProductList(request: GetProductListRequestDTO): Observable<ProductListResponseDTO> {
        return this.httpClient.post<ProductListResponseDTO>(RestAddresses.GET_PRODUCT_BY_CATEGORY_ID, request);
    }

    getRelatedProductList(request: GetRelatedProductListRequestDTO): Observable<ProductSummaryDTO> {
        return this.httpClient.post<ProductSummaryDTO>(RestAddresses.GET_RELATED_PRODUCT_LIST, request);
    }
}
