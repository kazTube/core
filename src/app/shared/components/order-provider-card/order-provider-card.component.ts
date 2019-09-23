import {Component, Input, OnInit} from '@angular/core';
import {UtilService} from '../../../core/services/util.service';

@Component({
    selector: 'app-order-provider-card',
    templateUrl: './order-provider-card.component.html',
    styleUrls: ['./order-provider-card.component.scss']
})
export class OrderProviderCardComponent implements OnInit {

    // todo add pharmacy location
    @Input() pharmacyName: string;
    @Input() pharmacyDescription: string;
    @Input() pharmacyDistance: string;

    constructor(public utilService: UtilService) {
    }

    ngOnInit(): void {
        console.log(this.pharmacyDistance);
    }

}
