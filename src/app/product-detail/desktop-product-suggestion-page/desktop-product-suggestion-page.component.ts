import {Component, OnInit} from '@angular/core';
import {ProductInfoDTO} from '../../dto/product/ProductInfoDTO';
import {ActivatedRoute} from '@angular/router';
import {BasketPageService} from '../../basket/basket-page/basket-page.service';
import {ProductAttributeDTO} from '../../dto/product/ProductAttributeDTO';
import {ProductSummaryDTO} from '../../dto/product/ProductSummaryDTO';

@Component({
  selector: 'app-desktop-product-suggestion-page',
  templateUrl: './desktop-product-suggestion-page.component.html',
  styleUrls: ['./desktop-product-suggestion-page.component.scss']
})
export class DesktopProductSuggestionPageComponent implements OnInit {

    product: ProductInfoDTO;
    productFirstAttribute: ProductAttributeDTO = null;
    relatedProductList: ProductSummaryDTO[] = [];
    bestSellingProductList: ProductSummaryDTO[] = [];
    youMayNeedProductList: ProductSummaryDTO[] = [];
    basketItemCount = 0;
    isProductImageExist: boolean;

  constructor(private route: ActivatedRoute, private basketService: BasketPageService) { }

  ngOnInit() {
      this.route.data.subscribe(data => {
          this.product = data.resolvedData.product;
          this.relatedProductList = data.resolvedData.relatedProductList;
          this.bestSellingProductList = data.resolvedData.bestSellingProductList;
          this.youMayNeedProductList = data.resolvedData.youMayNeedProductList;
          this.basketItemCount = this.basketService.getBasketItemsCount();
          if (this.product.attributesList && this.product.attributesList.length > 0) {
            this.productFirstAttribute = this.product.attributesList[0];
          }
          this.isProductImageExist = this.product && this.product.imageUrlList && this.product.imageUrlList.length > 0;
      });
  }


}
