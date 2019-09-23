import {Component} from '@angular/core';
import {HeaderService} from '../../header/header.service';
import {Router} from '@angular/router';
import {LoginService} from '../../../login/login.service';
import {BaseMenuComponent} from '../base-menu.component';

@Component({
    selector: 'app-mobile-menu',
    templateUrl: './mobile-menu.component.html',
    styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent extends BaseMenuComponent {

    constructor(public headerService: HeaderService,
                public router: Router,
                public loginService: LoginService) {
        super();
    }

    closeMenu() {
        this.headerService.closeMenu();
    }

    goToProfile() {
        this.closeMenu();
        this.router.navigate(['/profile/personal-info']);
        // if (this.loginService.isUserLoggedIn()) {
        //
        // } else {
        //     this.loginService.redirectUrl = '/profile/personal-info';
        //     this.router.navigate(['/login']);
        // }
    }

    logoutUser() {
        this.loginService.logoutUser();
        this.closeMenu();
        this.router.navigate(['/home']);
    }
}
