import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchResultDTO} from '../../../dto/search/SearchResultDTO';
import {Observable} from 'rxjs';
import {ProductSearchResultDTO} from '../../../dto/search/ProductSearchResultDTO';
import {SearchInCategoryRequestDTO} from '../../../dto/search/SearchInCategoryRequestDTO';
import {RestAddresses} from '../../../core/constants/RestAddresses';
import {ProductListResponseDTO} from '../../../dto/product/ProductListResponseDTO';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    searchText = '';
    searchResult: SearchResultDTO = new SearchResultDTO(0, [], []);
    topProductList: ProductSearchResultDTO[] = [];
    autoCompleteToShow = 'NONE';


    constructor(private httpClient: HttpClient) {
    }

    search(text: string): Observable<SearchResultDTO> {
        return this.httpClient.post<SearchResultDTO>(RestAddresses.SEARCH_PRODUCT, {
                phrase: text,
                limit: 5,
                offset: 0
            }
        );
    }

    searchInCategory(request: SearchInCategoryRequestDTO): Observable<ProductListResponseDTO> {
        return this.httpClient.post<ProductListResponseDTO>(RestAddresses.SEARCH_PRODUCT_IN_CATEGORY, request);
    }

    getTopProductList(): Observable<ProductSearchResultDTO[]> {
        return this.httpClient.post<ProductSearchResultDTO[]>(RestAddresses.GET_TOP_PRODUCT_LIST, {
                limit: 5,
                offset: 0
            }
        );
    }
}
