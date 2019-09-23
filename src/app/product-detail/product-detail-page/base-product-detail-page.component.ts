import {Component, OnInit} from '@angular/core';
import {ProductInfoDTO} from '../../dto/product/ProductInfoDTO';
import {ActivatedRoute, Router} from '@angular/router';
import {BasketPageService} from '../../basket/basket-page/basket-page.service';
import {ProductSummaryDTO} from '../../dto/product/ProductSummaryDTO';
import {ProductSummaryCardTypeEnum} from '../../dto/product/ProductSummaryCardTypeEnum';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {SpecialOfferProductDTO} from '../../dto/pharmacy/SpecialOfferProductDTO';
import {SpecialOfferProductSummaryDTO} from '../../dto/pharmacy/SpecialOfferProductSummaryDTO';
import {UtilService} from '../../core/services/util.service';
import {HeaderService} from '../../layout/header/header.service';

@Component({
    template: '',
})
export class BaseProductDetailPageComponent implements OnInit {

    product: ProductInfoDTO | SpecialOfferProductDTO;
    similarProductList: ProductSummaryDTO[] | SpecialOfferProductSummaryDTO[] = [];
    isAddingToBasket = false;
    isSpecialOfferProduct = false;
    pharmacyName: string = undefined;
    pharmacyHixCode: number = undefined;
    ProductSummaryCardTypeEnum = ProductSummaryCardTypeEnum;

    constructor(
        public basketService: BasketPageService,
        public headerService: HeaderService,
        public route: ActivatedRoute,
        public router: Router,
        public utilService: UtilService
    ) {
    }

    ngOnInit() {

        if (this.route.routeConfig.path === 'specialOffer/:code/:hixCode') {
            this.route.data.subscribe(data => {
                this.isSpecialOfferProduct = true;
                this.product = data.resolvedData.specialOfferProduct;
                this.pharmacyName = data.resolvedData.pharmacyInfo.name;
                this.pharmacyHixCode = data.resolvedData.pharmacyInfo.pharmacyHixCode;
                this.similarProductList = this.utilService.convertToTileDTO(data.resolvedData.specialOfferProductList,
                    this.pharmacyHixCode, this.pharmacyName);
            });
        } else {
            this.route.data.subscribe(data => {
                this.product = data.resolvedData.product;
                this.similarProductList = data.resolvedData.similarProductList;
            });
        }
    }

    addProductToBasket(): Observable<boolean> {
        this.isAddingToBasket = true;
        const productSummaryDTO = new ProductSummaryDTO(
            this.product.productId,
            this.product.productCode,
            this.product.productNameFa,
            this.product.productNameEn,
            this.product.imageUrlList,
            this.product.attributesList,
            this.product.description,
            this.product.rate
        );
        const addToBasket$ = this.basketService.addItemToBasket(productSummaryDTO, this.product.unitList).pipe(shareReplay(1));
        addToBasket$.subscribe(
            () => {
                this.isAddingToBasket = false;
            }, () => this.isAddingToBasket = false);
        return addToBasket$;
    }


    addSpecialOfferProductToBasket(): Observable<boolean> {
        this.isAddingToBasket = true;
        const specialOfferProductSummary = new SpecialOfferProductSummaryDTO(
            this.product.productId,
            this.product.productCode,
            this.product.productNameFa,
            this.product.productNameEn,
            this.product.imageUrlList,
            this.pharmacyName,
            this.pharmacyHixCode,
            this.product.unitList,
            (this.product as SpecialOfferProductDTO).newPrice,
            (this.product as SpecialOfferProductDTO).oldPrice,
            (this.product as SpecialOfferProductDTO).discountPercentage,
            this.product.rate
        );
        const addToBasket$ = this.basketService.addSpecialOfferItemToBasket(specialOfferProductSummary).pipe(shareReplay(1));
        addToBasket$.subscribe(
            () => {
                this.isAddingToBasket = false;
            }, () => this.isAddingToBasket = false);
        return addToBasket$;
    }


}
