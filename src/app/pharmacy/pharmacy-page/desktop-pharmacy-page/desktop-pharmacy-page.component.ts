import {Component, OnInit} from '@angular/core';
import {BasePharmacyPageComponent} from '../base-pharmacy-page.component';
import {PharmacyPageService} from '../pharmacy-page.service';
import {MatDialog} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilService} from '../../../core/services/util.service';
import {SpecialOfferProductDTO} from '../../../dto/pharmacy/SpecialOfferProductDTO';
import {SORT_BY_MOST_VIEWED, SortByOption} from '../../../shared/components/mobile-select-sort-by-pop-up/model/SortByOption';

@Component({
    selector: 'app-desktop-pharmacy-page',
    templateUrl: './desktop-pharmacy-page.component.html',
    styleUrls: ['./desktop-pharmacy-page.component.scss']
})
export class DesktopPharmacyPageComponent extends BasePharmacyPageComponent implements OnInit {

    currentPage = 1;

    constructor(pharmacyPageService: PharmacyPageService,
                dialog: MatDialog,
                route: ActivatedRoute,
                router: Router,
                utilService: UtilService
    ) {
        super(pharmacyPageService, dialog, route, router, utilService);
    }

    ngOnInit() {
        super.ngOnInit();
        this.route.params.subscribe(() => {
            this.initialize();
        });
    }

    initialize() {
        this.currentPage = 1;
        this.selectedSortBy = SORT_BY_MOST_VIEWED;
    }

    onSearchInPharmacyProducts(searchText: string) {
        this.searchText = searchText;
        this.searchInPharmacyProducts(searchText).subscribe(() => {
            this.currentPage = 1;
        });
    }

    onSortChange(sortByOption: SortByOption) {
        this.sortBy(sortByOption).subscribe(() => {
            this.currentPage = 1;
        });
    }

    onPageChange(pageNumber: number) {
        const offset = (pageNumber - 1) * this.pharmacyPageService.pharmacyProductListPageSize;
        this.getSpecialOfferProductList(offset).subscribe((specialOfferProductList: SpecialOfferProductDTO[]) => {
            this.pharmacySpecialOfferProductList = this.utilService.convertToTileDTO(specialOfferProductList,
                this.pharmacyInfo.pharmacyHixCode, this.pharmacyInfo.name);
            this.currentPage = pageNumber;
        });
    }
}
