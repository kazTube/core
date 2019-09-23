import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BasketPageService} from '../../../basket/basket-page/basket-page.service';
import {ProductSummaryDTO} from '../../../dto/product/ProductSummaryDTO';
import {ProductDetailService} from '../../../product-detail/product-detail-page/product-detail.service';
import {flatMap, map} from 'rxjs/operators';
import {forkJoin} from 'rxjs';
import {RoutingService} from '../../../routing/routing.service';

@Component({
    selector: 'app-new-product-detail',
    templateUrl: './add-new-product-card.component.html',
    styleUrls: ['./add-new-product-card.component.scss']
})
export class AddNewProductCardComponent implements OnInit {
    @Input() type: 'simple' | 'full' = 'full';
    InputLabel = 'نام محصول';
    productDescription: string;
    productName = '';
    initialProductName = '';
    isAddingToBasket = false;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private routingService: RoutingService,
                private basketService: BasketPageService,
                private productDetailService: ProductDetailService) {
    }

    ngOnInit() {
        this.route.queryParamMap.subscribe(params => {
            const productName = params.get('productName');
            if (productName) {
                this.InputLabel = productName;
                this.initialProductName = productName;
            }
        });

    }

    onFocus() {
        this.InputLabel = 'نام محصول';
    }

    onBlur() {
        if (this.productName && this.productName.length > 0) {
            this.InputLabel = 'نام محصول';
        } else {
            this.InputLabel = this.initialProductName;
        }
    }

    addToBasket() {
        this.isAddingToBasket = true;
        let productName = this.initialProductName;
        if (this.productName && this.productName.length > 0) {
            productName = this.productName;
        }
        forkJoin(this.productDetailService.addNewProductToServer(productName, this.productDescription),
            this.productDetailService.getAllProductUnitList())
            .pipe(
                map(result => {
                    // result[0] is productCode and result[1] is allProductUnitList
                    return {productCode: result[0], unitList: result[1]};
                }),
                flatMap(response => {
                    const productSummary = new ProductSummaryDTO(-1,
                        response.productCode, productName,
                        '', [], [], this.productDescription, 0);
                    return this.basketService.addItemToBasket(
                        productSummary,
                        response.unitList);
                })
            ).subscribe(isAdded => {
            if (isAdded) {
                this.router.navigate(['/basket']);
                this.isAddingToBasket = false;
            }
        }, () => {
            this.isAddingToBasket = false;
        });
    }

   isAddToBasketAllowed() {
        return this.productDescription && this.productDescription.length > 0 && !this.isAddingToBasket;
    }

}
