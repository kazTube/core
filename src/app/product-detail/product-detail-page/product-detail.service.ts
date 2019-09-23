import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GetSimilarProductListRequestDTO} from '../../dto/product/GetSimilarProductListRequestDTO';
import {RestAddresses} from '../../core/constants/RestAddresses';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ProductUnitDTO} from '../../dto/product/ProductUnitDTO';
import {ProductSummaryDTO} from '../../dto/product/ProductSummaryDTO';
import {ProductInfoDTO} from '../../dto/product/ProductInfoDTO';
import {GetRelatedProductListRequestDTO} from '../../dto/product/GetRelatedProductListRequestDTO';

@Injectable({
    providedIn: 'root'
})
export class ProductDetailService {

    relatedProductPageSize = 6;
    bestSellingProductPageSize = 6;
    youMayNeedProductPageSize = 6;

    constructor(private httpClient: HttpClient) {
    }

    getProductByCode(productCode: string): Observable<ProductInfoDTO> {
        return this.httpClient.post<ProductInfoDTO>(RestAddresses.GET_PRODUCT_BY_CODE, {productCode: productCode});
    }

    getSimilarProductList(request: GetSimilarProductListRequestDTO): Observable<ProductSummaryDTO> {
        return this.httpClient.post<ProductSummaryDTO>(RestAddresses.GET_SIMILAR_PRODUCT_LIST, request);
    }

    getRelatedProductList(request: GetRelatedProductListRequestDTO): Observable<ProductSummaryDTO> {
        return this.httpClient.post<ProductSummaryDTO>(RestAddresses.GET_RELATED_PRODUCT_LIST, request);
    }
    getBestSellingProductList(): Observable<ProductSummaryDTO> {
        return this.httpClient.post<ProductSummaryDTO>(RestAddresses.GET_BEST_SELLING_PRODUCT_LIST,
            {itemCount: this.bestSellingProductPageSize});
    }
    getYouMayNeedProductList(): Observable<ProductSummaryDTO> {
        return this.httpClient.post<ProductSummaryDTO>(RestAddresses.GET_YOU_MAY_NEED_PRODUCT_LIST,
            {itemCount: this.youMayNeedProductPageSize});
    }

    addNewProductToServer(productName: string, productDescription: string): Observable<string> {
        return this.httpClient.post<any>(RestAddresses.ADD_NEW_PRODUCT_TO_SERVER, {
            productName: productName,
            description: productDescription,
        }).pipe(map(response => response.productCode));

    }

    getAllProductUnitList(): Observable<ProductUnitDTO[]> {
        return this.httpClient.post<ProductUnitDTO[]>(RestAddresses.GET_ALL_PRODUCT_UNIT_LIST, null);
    }


}
