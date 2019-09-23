import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {BasketPageService} from '../../../basket/basket-page/basket-page.service';
import {Router} from '@angular/router';
import {ProductSummaryDTO} from '../../../dto/product/ProductSummaryDTO';
import {CardLayoutEnum} from '../../../dto/CardLayoutEnum';
import {SpecialOfferProductSummaryDTO} from '../../../dto/pharmacy/SpecialOfferProductSummaryDTO';
import {ProductSummaryCardTypeEnum} from '../../../dto/product/ProductSummaryCardTypeEnum';
import {UtilService} from '../../../core/services/util.service';

@Component({
    selector: 'app-product-summary-card',
    templateUrl: './product-summary-card.component.html',
    styleUrls: ['./product-summary-card.component.scss']
})
export class ProductSummaryCardComponent implements OnChanges {

    @Input() productSummary: ProductSummaryDTO | SpecialOfferProductSummaryDTO;
    @Input() cardLayout: CardLayoutEnum = CardLayoutEnum.Vertical;
    @Input() cardType: ProductSummaryCardTypeEnum = ProductSummaryCardTypeEnum.Attribute;

    productTileCardType = ProductSummaryCardTypeEnum;
    productTileCardLayout = CardLayoutEnum;
    cardFlexDirection: string;
    imageFlexValue: string;
    contentFlexValue: string;
    isProductImageExist: boolean;
    isAddingToBasket = false;

    constructor(
        private basketService: BasketPageService,
        private router: Router,
        public utilService: UtilService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['productSummary']) {
            this.setIsProductImageExist();
        }
        if (changes['cardLayout']) {
            this.setCardFlexDirection();
            this.setContentFlexValue();

        }
        if (changes['cardLayout'] || changes['cardType']) {
            this.setImageFlexValue();

        }

    }

    goToProductDetail() {
        if (this.cardType === ProductSummaryCardTypeEnum.SpecialOfferProduct) {
            this.router.navigateByUrl(`/product/detail/specialOffer/
            ${this.productSummary.productCode}/${(this.productSummary as SpecialOfferProductSummaryDTO).pharmacyHixCode}`);
        } else {
            this.router.navigateByUrl(`/product/detail/${this.productSummary.productCode}`);
        }

    }

    addSpecialOfferProductToBasket() {
        if (this.cardType === ProductSummaryCardTypeEnum.SpecialOfferProduct) {
            const product = this.productSummary as SpecialOfferProductSummaryDTO;
            this.isAddingToBasket = true;
            this.basketService.addSpecialOfferItemToBasket(product).subscribe(() => {
                this.isAddingToBasket = false;
                this.router.navigate(['/basket']);
            }, () => {
                this.isAddingToBasket = false;
            });
        }
    }


    private setCardFlexDirection() {
        if (this.cardLayout === CardLayoutEnum.Horizontal) {
            this.cardFlexDirection = 'row';
        } else {
            this.cardFlexDirection = 'column';
        }
    }

    private setImageFlexValue() {
        if (this.cardLayout === CardLayoutEnum.Horizontal) {
            this.imageFlexValue = '30%';
        } else {
            if (this.cardType === ProductSummaryCardTypeEnum.SpecialOfferProduct) {
                this.imageFlexValue = '42%';
            } else {
                this.imageFlexValue = '65%';
            }
        }
    }

    private setContentFlexValue() {
        if (this.cardLayout === CardLayoutEnum.Horizontal) {
            this.contentFlexValue = '70%';
        } else {
            this.contentFlexValue = '34%';
        }
    }

    private setIsProductImageExist() {
        this.isProductImageExist = this.productSummary.imageUrlList && this.productSummary.imageUrlList.length > 0;
    }
}
