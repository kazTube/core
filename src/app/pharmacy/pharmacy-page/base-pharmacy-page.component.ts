import {Component, OnInit} from '@angular/core';
import {PharmacyInfoDTO} from '../../dto/pharmacy/PharmacyInfoDTO';
import {MatDialog} from '@angular/material';
import {SORT_BY_MOST_VIEWED, SortByOption} from '../../shared/components/mobile-select-sort-by-pop-up/model/SortByOption';
import {SearchInPharmacyProductsRequestDTO} from '../../dto/pharmacy/SearchInPharmacyProductsRequestDTO';
import {PharmacyPageService} from './pharmacy-page.service';
import {SpecialOfferProductDTO} from '../../dto/pharmacy/SpecialOfferProductDTO';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactSupportPopUpComponent} from '../contact-support-pop-up/contact-support-pop-up.component';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {SpecialOfferProductSummaryDTO} from '../../dto/pharmacy/SpecialOfferProductSummaryDTO';
import {ProductSummaryCardTypeEnum} from '../../dto/product/ProductSummaryCardTypeEnum';
import {CardLayoutEnum} from '../../dto/CardLayoutEnum';
import {UtilService} from '../../core/services/util.service';
import {SubscribeToPharmacyPopUpComponent} from '../subscribe-to-pharmacy-pop-up/subscribe-to-pharmacy-pop-up.component';
import {UserProfileDTO} from '../../dto/profile/UserProfileDTO';

@Component({
    template: '',
})
export class BasePharmacyPageComponent implements OnInit {

    ProductSummaryCardTypeEnum = ProductSummaryCardTypeEnum;
    CardLayoutEnum = CardLayoutEnum;
    selectedSortBy: SortByOption = SORT_BY_MOST_VIEWED;
    pharmacySpecialOfferProductList: SpecialOfferProductSummaryDTO[];
    isCustomerClubMember: boolean;
    isMemberOfAnyPharmacy: boolean;
    pharmacyInfo: PharmacyInfoDTO;
    searchText = '';
    isLoading = false;
    isSubscribingToPharmacy = false;
    isPharmacyBannerExist: boolean;
    isPharmacyThumbnailExist: boolean;
    userProfile: UserProfileDTO;


    constructor(public pharmacyPageService: PharmacyPageService,
                public dialog: MatDialog,
                public route: ActivatedRoute,
                public router: Router,
                public utilService: UtilService) {
    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.isMemberOfAnyPharmacy = data.resolvedData.isMemberOfAnyPharmacy;
            this.pharmacyInfo = data.resolvedData.pharmacyInfo;
            this.isCustomerClubMember = data.resolvedData.isCustomerClubMember;
            this.pharmacySpecialOfferProductList = this.utilService.convertToTileDTO(data.resolvedData.SpecialOfferProductList,
                this.pharmacyInfo.pharmacyHixCode, this.pharmacyInfo.name);
            this.userProfile = data.userProfile;
            this.setIsPharmacyBannerExist();
            this.setIsPharmacyThumbnailExist();
        });
    }


    protected searchInPharmacyProducts(searchText: string): Observable<SpecialOfferProductDTO[]> {
        this.isLoading = true;
        const request = new SearchInPharmacyProductsRequestDTO(this.pharmacyInfo.pharmacyHixCode, searchText,
            this.pharmacyPageService.pharmacyProductListPageSize, 0, this.selectedSortBy.id);
        const searchInPharmacy$ = this.pharmacyPageService.searchInPharmacyProducts(request).pipe(shareReplay(1));
        searchInPharmacy$.subscribe((pharmacySpecialOfferProductList: SpecialOfferProductDTO[]) => {
            this.isLoading = false;
            this.pharmacySpecialOfferProductList = this.utilService.convertToTileDTO(pharmacySpecialOfferProductList,
                this.pharmacyInfo.pharmacyHixCode, this.pharmacyInfo.name);
        }, () => {
            this.isLoading = false;
        });
        return searchInPharmacy$;
    }

    protected getSpecialOfferProductList(offset: number): Observable<SpecialOfferProductDTO[]> {
        this.isLoading = true;
        const request = new SearchInPharmacyProductsRequestDTO(this.pharmacyInfo.pharmacyHixCode, this.searchText,
            this.pharmacyPageService.pharmacyProductListPageSize, offset, this.selectedSortBy.id);
        const productList$ = this.pharmacyPageService.searchInPharmacyProducts(request).pipe(shareReplay(1));
        productList$
            .subscribe(() => {
                this.isLoading = false;
            }, () => {
                this.isLoading = false;
            });
        return productList$;
    }


    protected subscribeToPharmacy() {
        if (this.isMemberOfAnyPharmacy) {
            this.isSubscribingToPharmacy = true;
            this.pharmacyPageService.isUnsubscriptionAllowed().subscribe((isUnsubscriptionAllowed: boolean) => {
                this.isSubscribingToPharmacy = false;
                if (isUnsubscriptionAllowed) {
                    this.openSubscribeToPharmacyDialog();
                } else {
                    this.openContactSupportDialog();
                }
            }, () => {
                this.isSubscribingToPharmacy = false;
            });

        } else {
            this.openSubscribeToPharmacyDialog();
        }
    }

    protected openContactSupportDialog() {
        const changePharmacyDialog = this.dialog.open(ContactSupportPopUpComponent, {
                width: '260px',
                height: '300px',
                data: {
                    msg: 'کاربر گرامی در حال حاضر شما عضو باشگاه مشتریان داروخانه ی دیگری هستید ' +
                        'برای تغییر وضعیت عضویت در باشگاه با پشتیبانی تماس حاصل نمایید',
                    hixCode: this.pharmacyInfo.pharmacyHixCode
                }
            }
        );

    }

    protected openSubscribeToPharmacyDialog() {
        const subscribeToPharmacyDialog = this.dialog.open(SubscribeToPharmacyPopUpComponent, {
                width: '260px',
                height: '300px',
                disableClose: true,
                data: {
                    msg: 'با عضویت در باشگاه مشتریان داروپین از تخفیف های ویژه بهره مند خواهید' +
                        ' شد عضویت شما در باشگاه مشتریان این داروخانه کاملا رایگان می باشد'
                }
            }
        );
        subscribeToPharmacyDialog.afterClosed().subscribe((isConfirmed: boolean) => {
            if (isConfirmed) {
                this.isSubscribingToPharmacy = true;
                this.pharmacyPageService.subscribeToPharmacy(this.userProfile.invitationCode).subscribe(() => {
                    this.isSubscribingToPharmacy = false;
                    this.router.navigate(['/pharmacy/subscription/completed/' + this.pharmacyInfo.pharmacyHixCode,
                        {pharmacyName: this.pharmacyInfo.name}]);
                }, () => {
                    this.isSubscribingToPharmacy = false;
                });
            }
        });
    }

    protected sortBy(sortByOption: SortByOption): Observable<SpecialOfferProductDTO[]> {
        this.isLoading = true;
        const request = new SearchInPharmacyProductsRequestDTO(this.pharmacyInfo.pharmacyHixCode, this.searchText,
            this.pharmacyPageService.pharmacyProductListPageSize, 0, sortByOption.id);
        const sortBy$ = this.pharmacyPageService.searchInPharmacyProducts(request).pipe(shareReplay(1));
        sortBy$
            .subscribe((pharmacySpecialOfferProductList: SpecialOfferProductDTO[]) => {
                    this.isLoading = false;
                    this.selectedSortBy = sortByOption;
                    this.pharmacySpecialOfferProductList = this.utilService.convertToTileDTO(pharmacySpecialOfferProductList,
                        this.pharmacyInfo.pharmacyHixCode, this.pharmacyInfo.name);
                },
                () => this.isLoading = false
            );
        return sortBy$;
    }


    private setIsPharmacyBannerExist() {
        return this.pharmacyInfo.imageBackground && this.pharmacyInfo.imageBackground.length > 0;
    }

    private setIsPharmacyThumbnailExist() {
        return this.pharmacyInfo.imageThumbnail && this.pharmacyInfo.imageThumbnail.length > 0;
    }


}
