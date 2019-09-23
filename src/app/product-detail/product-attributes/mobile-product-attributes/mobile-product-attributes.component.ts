import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {ProductAttributeDTO} from '../../../dto/product/ProductAttributeDTO';
import {BaseProductAttributesComponent} from '../base-product-attributes.component';

@Component({
    selector: 'app-mobile-product-attributes',
    templateUrl: './mobile-product-attributes.component.html',
    styleUrls: ['./mobile-product-attributes.component.scss']
})
export class MobileProductAttributesComponent extends BaseProductAttributesComponent implements OnChanges {
    visibleProductAttributeList: ProductAttributeDTO[] = [];
    isShowingAllAttributes = false;
    initialAttributeSize = 3;

    constructor() {
        super();
    }

    ngOnChanges(changes: SimpleChanges): void {
        super.ngOnChanges(changes);
        this.showLessAttribute();

    }

    showMoreAttribute() {
        this.isShowingAllAttributes = true;
        this.visibleProductAttributeList = this.productAttributeList;
    }

    showLessAttribute() {
        this.isShowingAllAttributes = false;
        this.visibleProductAttributeList = this.productAttributeList.slice(0, this.initialAttributeSize);
    }

}
