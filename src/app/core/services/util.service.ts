import {Injectable} from '@angular/core';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {LocationModel} from '../../dto/LocationModel';
import {SpecialOfferProductDTO} from '../../dto/pharmacy/SpecialOfferProductDTO';
import {SpecialOfferProductSummaryDTO} from '../../dto/pharmacy/SpecialOfferProductSummaryDTO';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    private scrollEvent = new ReplaySubject();
    private clickEvent = new ReplaySubject();
    public scrollEvent$ = this.scrollEvent.asObservable();
    public clickEvent$ = this.clickEvent.asObservable();

    constructor() {
    }

    sendScrollEvent(event: any) {
        this.scrollEvent.next(event);
    }

    sendClickEvent(event: any) {
        this.clickEvent.next(event);
    }

    convertPersianNumberToEnglishNumber(input: string) {
        if (input === null || input === undefined) {
            return input;
        }
        let result = '';
        for (let i = 0; i < input.length; i++) {
            switch (input[i]) {
                case '۰':
                    result = result.concat('0');
                    break;
                case '۱':
                    result = result.concat('1');
                    break;
                case '۲':
                    result = result.concat('2');
                    break;
                case '۳':
                    result = result.concat('3');
                    break;
                case '۴':
                    result = result.concat('4');
                    break;
                case '۵':
                    result = result.concat('5');
                    break;
                case '۶':
                    result = result.concat('6');
                    break;
                case '۷':
                    result = result.concat('7');
                    break;
                case '۸':
                    result = result.concat('8');
                    break;
                case '۹':
                    result = result.concat('9');
                    break;
                default:
                    result = result.concat(input[i]);
            }
        }
        return result;

    }

    getCurrentLocation(): Observable<LocationModel> {
        const result = new Subject<LocationModel>();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                result.next(new LocationModel(position.coords.latitude, position.coords.longitude));
                result.complete();
            }, error => {
                result.error(error);
            });
        } else {
            console.log('Geolocation is not supported by this browser.');
            result.error('Geolocation is not supported by this browser.');
        }

        return result.asObservable();
    }

    normalizePharmacyName(pharmacyName: string): string {
        if (!pharmacyName.startsWith('داروخانه')) {
            pharmacyName = 'داروخانه ' + pharmacyName;
        }
        return pharmacyName;
    }

    areStringArraysEqual(arrayOne: string[], arrayTwo: string[]): boolean {
        let result = true;
        if (arrayOne.length !== arrayTwo.length) {
            result = false;
        } else {
            result = !arrayOne.some((item, index) =>
                this.convertPersianNumberToEnglishNumber(item) !== this.convertPersianNumberToEnglishNumber(arrayTwo[index])
            );
        }
        return result;
    }

    convertToTileDTO(productList: SpecialOfferProductDTO[],
                     pharmacyHixCode: number,
                     pharmacyName: string): SpecialOfferProductSummaryDTO[] {
        let result: SpecialOfferProductSummaryDTO[] = [];
        if (productList && productList.length > 0) {
            result = productList.map(product => {
                return new SpecialOfferProductSummaryDTO(product.productId, product.productCode, product.productNameFa,
                    product.productNameEn, product.imageUrlList, pharmacyName, pharmacyHixCode, product.unitList,
                    product.newPrice, product.oldPrice, product.discountPercentage, product.rate);
            });
        }
        return result;

    }
}
