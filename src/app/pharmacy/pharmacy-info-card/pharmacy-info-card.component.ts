import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {PharmacyInfoDTO} from '../../dto/pharmacy/PharmacyInfoDTO';

@Component({
    selector: 'app-pharmacy-info-card',
    templateUrl: './pharmacy-info-card.component.html',
    styleUrls: ['./pharmacy-info-card.component.scss']
})
export class PharmacyInfoCardComponent implements OnChanges {

    @Input() pharmacyInfo: PharmacyInfoDTO;
    markerIcon = {
        url: '../../../../assets/svgs/pin.svg',
        scaledSize: {
            width: 16,
            height: 33
        }
    };
    isPharmacyThumbnailExist: boolean;

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.isPharmacyThumbnailExist = this.pharmacyInfo.imageThumbnail && this.pharmacyInfo.imageThumbnail.length > 0;

    }


}
