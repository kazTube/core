import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UtilService} from '../../core/services/util.service';

@Component({
    selector: 'app-subscription-completed-page',
    templateUrl: './subscription-completed-page.component.html',
    styleUrls: ['./subscription-completed-page.component.scss']
})
export class SubscriptionCompletedPageComponent implements OnInit {

    hixCode: number;
    pharmacyName: string;
    isButtonDisabled = false;

    constructor(public route: ActivatedRoute, private utilService: UtilService) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.hixCode = +params.get('hixCode');
            this.pharmacyName = this.utilService.normalizePharmacyName(params.get('pharmacyName'));

        });
    }

    disableButton() {
        this.isButtonDisabled = true;
    }

}
