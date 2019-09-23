import {Component, Input, OnInit} from '@angular/core';
import {BaseAddressListComponent} from '../base-address-list.component';
import {UserProfileService} from '../../../../profile/user-profile.service';
import {Router} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-mobile-address-list',
    templateUrl: './mobile-address-list.component.html',
    styleUrls: ['./mobile-address-list.component.scss'],
    animations: [
        trigger('listAnimation', [
            transition('unselected => selected', [
                animate('0.6s cubic-bezier(0.175, 0.885, 0.32, 1.175)', style({transform: 'translateY(-{{ top }}px)'})),
            ]),
            transition('* => moveDown', [
                animate('0.6s ease', style({transform: 'translateY({{ moveDown }}px)'})),
            ])
        ])
    ]
})
export class MobileAddressListComponent extends BaseAddressListComponent implements OnInit {

    @Input() title = '';

    constructor(
        public userProfileService: UserProfileService,
        public router: Router) {
        super(userProfileService, router);
    }

    ngOnInit() {
        super.ngOnInit();
    }

}
