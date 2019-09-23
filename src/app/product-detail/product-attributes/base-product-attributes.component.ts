import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ProductAttributeDTO} from '../../dto/product/ProductAttributeDTO';

@Component({
    template: '',
})
export class BaseProductAttributesComponent implements OnChanges {

    @Input() productAttributeList: ProductAttributeDTO[] = [];
    productAttributeListSize: number;


    constructor() {
    }


    ngOnChanges(changes: SimpleChanges): void {
        this.productAttributeListSize = (this.productAttributeList && this.productAttributeList.length > 0) ?
            this.productAttributeList.length : 0;
    }


}
