import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {BaseProductDescriptionCardComponent} from '../base-product-description-card.component';
import {BreadcrumbItemModel} from '../../../shared/components/desktop-breadcrumb/breadcrumbItemModel';
import {ActivatedRoute} from '@angular/router';
import {UtilService} from '../../../core/services/util.service';
import {DesktopImageSliderPopUpComponent} from '../../desktop-image-slider-pop-up/desktop-image-slider-pop-up.component';
import {MatDialog} from '@angular/material';
import {ProductInfoDTO} from '../../../dto/product/ProductInfoDTO';
import {MenuService} from '../../../layout/menu/menu.service';

@Component({
    selector: 'app-desktop-product-description-card',
    templateUrl: './desktop-product-description-card.component.html',
    styleUrls: ['./desktop-product-description-card.component.scss']
})
export class DesktopProductDescriptionCardComponent extends BaseProductDescriptionCardComponent implements OnChanges {


    @Input() commentsCount = 0;
    @Input() pharmacyHixCode: string;
    @Input() isAddingToBasket = false;
    @Output() addToBasket = new EventEmitter();
    starRatingLabel = '';
    thumbnailImageList: string[] = [];
    breadcrumbModel: BreadcrumbItemModel[] = [];

    constructor(utilService: UtilService,
                private menuService: MenuService,
                private route: ActivatedRoute,
                private dialog: MatDialog,
    ) {
        super(utilService);
    }

    ngOnChanges(changes: SimpleChanges): void {
        super.ngOnChanges(changes);
        if (changes['pharmacyHixCode'] || changes['pharmacyName'] || changes['productInfo']) {
            this.setBreadCrumbModel();
        }
        if (changes['commentsCount'] || changes['productInfo']) {
            this.setStarRatingLabel();
        }
        if (changes['productInfo']) {
            this.setThumbnailImageList();
        }
    }


    onAddToBasket() {
        this.addToBasket.next();
    }

    openImageSlider() {
        this.dialog.open(DesktopImageSliderPopUpComponent, {
            width: '90%',
            height: '90%',
            panelClass: 'image-slider-dialog',
            data: {
                imageUrlList: this.productInfo.imageUrlList
            }
        })
        ;
    }

    private setBreadCrumbModel() {
        const breadcrumbList = [new BreadcrumbItemModel('داروخانه آنلاین', '/home')];

        if (this.isSpecialOfferProduct) {
            breadcrumbList.push(new BreadcrumbItemModel(this.utilService.normalizePharmacyName(this.pharmacyName),
                `/pharmacy/${this.pharmacyHixCode}`));
        } else {
            const currentCategory = this.menuService.getFlatCategoryById((this.productInfo as ProductInfoDTO).categoryList[0].categoryId);
            if (currentCategory) {
                for (const category of currentCategory.parentCategoryList) {
                    breadcrumbList.push(new BreadcrumbItemModel(category.name, `/product/list/${category.id}`));
                }
                breadcrumbList.push(new BreadcrumbItemModel(currentCategory.name, `/product/list/${currentCategory.id}`));
            }
            breadcrumbList.push(new BreadcrumbItemModel(this.productInfo.productNameFa, null));
        }
        this.breadcrumbModel = breadcrumbList;


    }

    private setThumbnailImageList() {
        this.thumbnailImageList = [];
        if (this.isProductImageExist) {
            for (let i = 0; i < Math.min(3, this.productInfo.imageUrlList.length); i++) {
                this.thumbnailImageList.push(this.productInfo.imageUrlList[i]);
            }
        }
    }

    private setStarRatingLabel() {
        this.starRatingLabel = `امتیاز ${this.productInfo.rate} از ${this.commentsCount} نظر `;
    }


}
