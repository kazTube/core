import {Injectable} from '@angular/core';
import {ProductSummaryDTO} from '../../dto/product/ProductSummaryDTO';
import {BasketItemDTO} from '../../dto/basket/BasketItemDTO';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {ProductUnitDTO} from '../../dto/product/ProductUnitDTO';
import {HttpClient} from '@angular/common/http';
import {OpenOrderResponseDTO} from '../../dto/basket/OpenOrderResponseDTO';
import {flatMap, shareReplay} from 'rxjs/operators';
import {RestAddresses} from '../../core/constants/RestAddresses';
import {LoginService} from '../../login/login.service';
import {SyncBasketRequestDTO} from '../../dto/basket/SyncBasketRequestDTO';
import {UpdateBasketItemDTO} from '../../dto/basket/UpdateBasketItemDTO';
import {SpecialOfferProductSummaryDTO} from '../../dto/pharmacy/SpecialOfferProductSummaryDTO';
import {Subscriber} from 'rxjs/src/internal/Subscriber';

const BASKET_ITEM_LIST_LOCAL_STORAGE_KEY = 'basketItemList';
const BASKET_ITEM_LIST_VERSION_STORAGE_KEY = 'basketItemListVersion';

@Injectable({
    providedIn: 'root'
})
export class BasketPageService {

    basketItemList: BasketItemDTO[] = [];

    private basketItemsCount = new BehaviorSubject(0);
    basketItemsCount$ = this.basketItemsCount.asObservable();
    // it is used to discover if saved basketItemList in localstorage is valid
    private basketItemListVersion = 2;

    constructor(
        private httpClient: HttpClient,
        private loginService: LoginService) {
        // this is for updating basket item count in header whenever user login
        this.loginService.userLoggedIn$.subscribe(userIsLoggedIn => {
            if (userIsLoggedIn) {
                this.getUserBasketFromServer();
            }
        });

        // this is for updating basket item count in header whenever user logout
        this.loginService.userLoggedOut$.subscribe(userIsLoggedOut => {
            if (userIsLoggedOut) {
                this.basketItemList = [];
                this.basketItemsCount.next(0);
            }
        });
    }

    loadBasket() {

        if (this.loginService.isUserLoggedIn()) {
            return this.getUserBasketFromServer();
        } else {
            let basketItemList = [];
            const basketItemListJson = localStorage.getItem(BASKET_ITEM_LIST_LOCAL_STORAGE_KEY);
            const basketItemListVersionJson = localStorage.getItem(BASKET_ITEM_LIST_VERSION_STORAGE_KEY);
            if (basketItemListJson && basketItemListVersionJson) {
                const basketItemListVersion = JSON.parse(basketItemListVersionJson);
                if (basketItemListVersion === this.basketItemListVersion) {
                    basketItemList = JSON.parse(basketItemListJson);
                }
            }
            this.basketItemList = basketItemList;
            this.basketItemsCount.next(this.getBasketItemsCount());
            return of(this.basketItemList);
        }

    }

    addItemToBasket(product: ProductSummaryDTO, productUnitList: ProductUnitDTO[]): Observable<boolean> {
        const basketItem = this.getItemToAddToBasket(product, productUnitList, false);
        return this.updateItemInBasket(basketItem);
    }

    addSpecialOfferItemToBasket(product: SpecialOfferProductSummaryDTO): Observable<boolean> {
        const basketItem = this.getItemToAddToBasket(product, product.unitList, true);
        return this.updateItemInBasket(basketItem);
    }

    removeItemFromBasket(productCode: string): Observable<boolean> {
        // user is logged in
        if (this.loginService.isUserLoggedIn()) {
            const deleteFromServerBasket$ = this.removeBasketItemFromServerBasket(productCode).pipe(shareReplay(1));
            deleteFromServerBasket$.subscribe(() => {
                this.removeBasketItemFromLocalBasket(productCode);
            });
            return deleteFromServerBasket$;

        } else { // user in not logged in
            this.removeBasketItemFromLocalBasket(productCode);
            this.saveBasketItemListToLocalStorage();
            return of(true);
        }
    }

    hasUserOpenOrder(): Observable<OpenOrderResponseDTO> {
        return this.httpClient.post<OpenOrderResponseDTO>(
            RestAddresses.HAS_OPEN_ORDER,
            null
        );
    }

    updateItemInBasket(basketItem: BasketItemDTO): Observable<boolean> {
        // user is logged in
        if (this.loginService.isUserLoggedIn()) {
            const syncWithServerBasket$ = this.syncWithServerBasket([basketItem]).pipe(shareReplay(1));
            syncWithServerBasket$.subscribe(() => {
                this.syncLocalBasketItemList(basketItem);
            });
            return syncWithServerBasket$;

        } else { // user in not logged in
            this.syncLocalBasketItemList(basketItem);
            this.saveBasketItemListToLocalStorage();
            return Observable.create((observer: Subscriber<boolean>) => observer.next(true));
        }
    }

    insertOrder(addressId: number): Observable<boolean> {
        return this.httpClient.post<boolean>(RestAddresses.INSERT_ORDER, {addressId: addressId});
    }

    payPayment(orderId: number, hixCode: number, amount: number): Observable<string> {
        return this.httpClient.post<string>(RestAddresses.ID_PAY_PAYMENT, {
            orderId: orderId,
            hixCode: hixCode,
            amount: amount
        });
    }

    getBasketItemsCount() {
        return this.basketItemList ? this.basketItemList.length : 0;
    }

    clearBasket() {
        this.basketItemList = [];
        this.removeBasketItemListFromLocalStorage();
        this.basketItemsCount.next(0);
    }


    private syncWithServerBasket(basketItemList: BasketItemDTO[]): Observable<boolean> {
        const updateBasketItemList = basketItemList.map(basketItem =>
            new UpdateBasketItemDTO(basketItem.productDetail.productCode, basketItem.count, basketItem.unitId));
        const request = new SyncBasketRequestDTO(updateBasketItemList);
        return this.httpClient.post<boolean>(RestAddresses.SYNC_BASKET, request);

    }

    private removeBasketItemFromServerBasket(productCode: string): Observable<boolean> {
        return this.httpClient.post<boolean>(RestAddresses.REMOVE_ITEM_FROM_BASKET,
            {productCode: productCode});
    }

    private removeBasketItemFromLocalBasket(productCode: string) {
        const deletionIndex = this.basketItemList.findIndex(item => item.productDetail.productCode === productCode);
        this.basketItemList.splice(deletionIndex, 1);
        this.basketItemsCount.next(this.getBasketItemsCount());
    }

    private getUserBasketFromServer(): Observable<BasketItemDTO[]> {

        const serverBasket$ = this.syncWithServerBasket(this.basketItemList)
            .pipe(
                flatMap(() => this.httpClient.post<BasketItemDTO[]>(RestAddresses.GET_USER_BASKET, null)),
                shareReplay(1)
            );
        serverBasket$
            .subscribe(basketItemList => {
                this.basketItemList = basketItemList ? basketItemList : [];
                this.basketItemsCount.next(this.getBasketItemsCount());
                this.removeBasketItemListFromLocalStorage();
            });

        return serverBasket$;
    }

    private syncLocalBasketItemList(newItem: BasketItemDTO) {
        let updateIndex = -1;
        this.basketItemList = this.basketItemList.map((item, index) => {
            if (item.productDetail.productCode === newItem.productDetail.productCode) {
                updateIndex = index;
                return newItem;
            }
            return item;
        });
        // it is a new Item
        if (updateIndex === -1) {
            this.basketItemList.unshift(newItem);
        } else { // it is an update
            this.basketItemList[updateIndex] = newItem;
            // let newBasketItemList = [this.basketItemList[updateIndex]];
            // newBasketItemList = newBasketItemList.concat(this.basketItemList.slice(0, updateIndex));
            // newBasketItemList = newBasketItemList.concat(this.basketItemList.slice(updateIndex + 1, this.basketItemList.length));
            // this.basketItemList = newBasketItemList;

        }
        const newCount = this.getBasketItemsCount();
        if (this.basketItemsCount.getValue() !== newCount) {
            this.basketItemsCount.next(newCount);
        }
    }

    private saveBasketItemListToLocalStorage() {
        localStorage.setItem(BASKET_ITEM_LIST_LOCAL_STORAGE_KEY, JSON.stringify(this.basketItemList));
        localStorage.setItem(BASKET_ITEM_LIST_VERSION_STORAGE_KEY, JSON.stringify(this.basketItemListVersion));
    }

    private removeBasketItemListFromLocalStorage() {
        localStorage.removeItem(BASKET_ITEM_LIST_LOCAL_STORAGE_KEY);
        localStorage.removeItem(BASKET_ITEM_LIST_VERSION_STORAGE_KEY);
    }

    private getItemToAddToBasket(product: ProductSummaryDTO | SpecialOfferProductSummaryDTO,
                                 productUnitList: ProductUnitDTO[],
                                 isSpecialOfferProduct: boolean): BasketItemDTO {

        const result = new BasketItemDTO(product, productUnitList, 1, 0, isSpecialOfferProduct);
        if (productUnitList && productUnitList.length > 0) {
            result.unitId = productUnitList[0].unitId;
        }
        const productInBasket = this.basketItemList.filter(basketItem => basketItem.productDetail.productCode === product.productCode);
        if (productInBasket.length > 0) {
            result.count = productInBasket[0].count + 1;
            result.unitId = productInBasket[0].unitId;
        }
        return result;
    }


}
