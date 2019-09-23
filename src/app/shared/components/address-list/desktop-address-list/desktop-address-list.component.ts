import {Component, Input, OnInit} from '@angular/core';
import {animate, query, style, transition, trigger} from '@angular/animations';
import {BaseAddressListComponent} from '../base-address-list.component';
import {UserProfileService} from '../../../../profile/user-profile.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-desktop-address-list',
    templateUrl: './desktop-address-list.component.html',
    styleUrls: ['./desktop-address-list.component.scss'],
    animations: [
        trigger('preventInitialChildAnimations', [
            transition(':enter', [
                query(':enter', [], {optional: true})
            ])
        ]),
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
export class DesktopAddressListComponent extends BaseAddressListComponent implements OnInit {

    @Input() fullMode = false;

    constructor(public userProfileService: UserProfileService,
                public router: Router) {
        super(userProfileService, router);
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
