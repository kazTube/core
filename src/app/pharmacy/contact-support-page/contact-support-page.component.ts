import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-contact-support-page',
    templateUrl: './contact-support-page.component.html',
    styleUrls: ['./contact-support-page.component.scss']
})
export class ContactSupportPageComponent implements OnInit {

    hixCode: number;
    isButtonDisabled = false;

    constructor(public route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.hixCode = +params.get('hixCode');
        });
    }

    disableButton() {
        this.isButtonDisabled = true;
    }

}
