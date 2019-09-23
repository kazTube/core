import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BasePharmacyPageComponent} from '../base-pharmacy-page.component';
import {PharmacyPageService} from '../pharmacy-page.service';
import {MatDialog} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {MatProgressButtonOptions} from 'mat-progress-buttons';
import {UtilService} from '../../../core/services/util.service';
import {SpecialOfferProductDTO} from '../../../dto/pharmacy/SpecialOfferProductDTO';
import {MobileSelectSortByPopUpComponent} from '../../../shared/components/mobile-select-sort-by-pop-up/mobile-select-sort-by-pop-up.component';
import {SpecialOfferProductSummaryDTO} from '../../../dto/pharmacy/SpecialOfferProductSummaryDTO';

@Component({
    selector: 'app-mobile-pharmacy-page',
    templateUrl: './mobile-pharmacy-page.component.html',
    styleUrls: ['./mobile-pharmacy-page.component.scss']
})
export class MobilePharmacyPageComponent extends BasePharmacyPageComponent implements OnInit, AfterViewInit {

    @ViewChild('pharmacySearchInput') pharmacySearchInput: ElementRef;
    loadMoreButtonOptions: MatProgressButtonOptions = {
        active: false,
        text: 'مشاهده بیشتر',
        spinnerSize: 19,
        raised: false,
        stroked: false,
        fullWidth: false,
        disabled: false,
        mode: 'indeterminate',
    };
    hasMore = true;
    private offset = 0;


    constructor(pharmacyPageService: PharmacyPageService,
                dialog: MatDialog,
                route: ActivatedRoute,
                router: Router,
                utilService: UtilService) {
        super(pharmacyPageService, dialog, route, router, utilService);

    }

    ngOnInit() {
        super.ngOnInit();

        this.route.data.subscribe(data => {
            this.setHasMore(data.resolvedData.SpecialOfferProductList);
        });
    }

    ngAfterViewInit(): void {
        this.startObservingInputBox();
    }

    startObservingInputBox() {
        const searchResult$ = fromEvent(this.pharmacySearchInput.nativeElement, 'input')
            .pipe(
                map((event: any) => {
                    if (event.target.value !== undefined) {
                        this.searchText = event.target.value;
                    }
                    return event.target.value;
                }),
                debounceTime(800),
                distinctUntilChanged(),
                switchMap(searchText => this.searchInPharmacyProducts(searchText)
                )
            );
        searchResult$.subscribe(searchResponse => {
            this.isLoading = false;
            this.pharmacySpecialOfferProductList = this.utilService.convertToTileDTO(searchResponse,
                this.pharmacyInfo.pharmacyHixCode, this.pharmacyInfo.name);
            this.setHasMore(this.pharmacySpecialOfferProductList);
        }, () => {
            this.isLoading = false;
        });
    }

    loadMoreProduct() {
        this.offset = this.offset + this.pharmacyPageService.pharmacyProductListPageSize;
        this.loadMoreButtonOptions.active = true;
        this.getSpecialOfferProductList(this.offset).subscribe((SpecialOfferProductList: SpecialOfferProductDTO[]) => {
                const specialOfferProductSummaryList = this.utilService.convertToTileDTO(SpecialOfferProductList,
                    this.pharmacyInfo.pharmacyHixCode, this.pharmacyInfo.name);
                this.pharmacySpecialOfferProductList = this.pharmacySpecialOfferProductList.concat(specialOfferProductSummaryList);
                this.setHasMore(specialOfferProductSummaryList);
                this.loadMoreButtonOptions.active = false;
            },
            () => this.loadMoreButtonOptions.active = false);
    }

    openSortByDialog(): void {
        const dialogRef = this.dialog.open(MobileSelectSortByPopUpComponent, {
            minWidth: '250px',
            data: this.selectedSortBy.id
        });

        dialogRef.afterClosed().subscribe(selectedSortByOption => {
            if (selectedSortByOption) {
                this.sortBy(selectedSortByOption).subscribe(() => {
                    this.offset = 0;
                    this.setHasMore(this.pharmacySpecialOfferProductList);
                });
            }
        });
    }

    private setHasMore(productList: SpecialOfferProductSummaryDTO[] | SpecialOfferProductDTO[]) {
        if (productList) {
            if (productList.length < this.pharmacyPageService.pharmacyProductListPageSize) {
                this.hasMore = false;
            }
        }
    }
}
