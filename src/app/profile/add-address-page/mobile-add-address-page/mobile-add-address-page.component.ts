import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AddressFormService} from '../../address-info-form/address-form.service';
import {BaseAddAddressPageComponent} from '../base-add-address-page.component';
import {RoutingService} from '../../../routing/routing.service';
import {LoginService} from '../../../login/login.service';

@Component({
    selector: 'app-mobile-add-address-page',
    templateUrl: './mobile-add-address-page.component.html',
    styleUrls: ['./mobile-add-address-page.component.scss']
})
export class MobileAddAddressPageComponent extends BaseAddAddressPageComponent implements OnInit {

    constructor(public route: ActivatedRoute,
                public router: Router,
                public routingService: RoutingService,
                public loginService: LoginService,
                public addressFormService: AddressFormService) {
        super(route, router, routingService, loginService, addressFormService);
    }

    ngOnInit() {
        super.ngOnInit();
    }
}
