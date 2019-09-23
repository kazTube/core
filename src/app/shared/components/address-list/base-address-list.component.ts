import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {AddressDTO} from '../../../dto/profile/AddressDTO';
import {Router} from '@angular/router';
import {UserProfileService} from '../../../profile/user-profile.service';

@Component({
    template: ''
})
export class BaseAddressListComponent implements OnInit, OnChanges {


    @Input() addressList: AddressDTO[];

    @Output() addressListChange = new EventEmitter();
    @Output() addressChanged = new EventEmitter<number>();

    @ViewChild('addressListTopAnchor') addressListTopAnchor: ElementRef;

    selectedAddressId: number;
    selectedAddressIdAfterAnm: number;
    addressListAfterAnm: AddressDTO[];
    selectedItemTop = 0;

    isAnimating = false;
    selectedIndex = -1;
    moveDown = 0;

    constructor(
        public userProfileService: UserProfileService,
        public router: Router) {
    }

    ngOnInit() {
        if (this.addressList.length > 0) {
            this.selectedAddressId = this.addressList[0].addressId;
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.addressList.previousValue !== undefined) {
            this.setSelectedAddress();
        }
    }

    onAddressSelect(index: number, addressCardElement: any, addressCardBottomMargin: number, addressId: number) {
        this.selectedAddressId = addressId;
        this.selectedIndex = index;
        this.selectedItemTop = addressCardElement.offsetTop;
        this.moveDown = addressCardElement.getBoundingClientRect().height + addressCardBottomMargin;

        // move selected item to first index of the list
        this.addressListAfterAnm = [...this.addressList];
        const selectedItem = AddressDTO.clone(this.addressListAfterAnm[index]);
        this.addressListAfterAnm.splice(index, 1);
        this.addressListAfterAnm.splice(0, 0, selectedItem);
        this.addressChanged.emit(addressId);
        this.isAnimating = true;
    }

    editAddress(addressId: number) {
        this.router.navigate(['/profile/address/edit/' + addressId]);
    }

    removeAddress(addressId: number) {
        this.userProfileService.removeAddress(addressId).subscribe(() => {
            this.addressList = this.addressList.filter(address => address.addressId !== addressId);
            if (addressId === this.selectedAddressId) {
                this.setSelectedAddress();
            }
            this.addressListChange.emit(this.addressList);
        });
    }

    animationStarted(event) {
        if (event.fromState !== 'void' && this.addressListTopAnchor) {
            if (!this.isElementInViewport(this.addressListTopAnchor.nativeElement)) {
                this.addressListTopAnchor.nativeElement.scrollIntoView();
            }
        }
    }

    getAnimationState(index: number, addressId: number): string {
        if (addressId === this.selectedAddressId) {
            return 'selected';
        } else if (this.isAnimating && index < this.selectedIndex) {
            return 'moveDown';
        } else {
            return 'unselected';
        }
    }

    animationDone(index: number, event: any) {
        if (event.toState === 'selected' && this.isAnimating) {
            if (this.addressListAfterAnm !== undefined) {
                this.addressList = this.addressListAfterAnm;
            }
            this.isAnimating = false;
        }
    }

    protected setSelectedAddress() {
        if (this.addressList.length > 0) {
            this.selectedAddressId = this.addressList[0].addressId;
            this.addressChanged.emit(this.selectedAddressId);
        }
    }

    protected isElementInViewport(element: any): boolean {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

}
