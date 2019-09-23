import {Injectable} from '@angular/core';
import {BasketPageService} from '../basket/basket-page/basket-page.service';
import {catchError} from 'rxjs/operators';
import {UserProfileService} from '../profile/user-profile.service';
import {LoginService} from '../login/login.service';
import {MenuService} from '../layout/menu/menu.service';

@Injectable({
    providedIn: 'root'
})
export class InitializerService {

    constructor(
        private basketService: BasketPageService,
        private menuService: MenuService,
        private userProfileService: UserProfileService,
        public loginService: LoginService
    ) {
    }

    getUserProfile() {
        if (this.loginService.isUserLoggedIn()) {
            return this.userProfileService.getUserProfile()
                .pipe(
                    catchError((error: any) => {
                        console.error(error);
                        console.error('هنگام دریافت اطلاعات کاربری خطایی رخ داده است');
                        return null;
                    })
                )
                .toPromise();
        } else {
            return Promise.resolve();
        }
    }

    initializeUserBasket() {
        return this.basketService.loadBasket().pipe(
            catchError((error: any) => {
                console.log(error);
                console.error('هنگام دریافت اطلاعات سبد خرید خطایی رخ داده است');
                return [];
            })
        )
            .toPromise();
    }

    initializeMenu() {
        return this.menuService.getMenuCategoryListFromServer().pipe(
            catchError((error: any) => {
                console.log(error);
                console.error('هنگام دریافت دسته بندی های منو خطایی رخ داده است');
                return [];
            })
        )
            .toPromise();
    }

    initializeTopCategoryList() {
        return this.menuService.getTopCategoryListFromServer().pipe(
            catchError((error: any) => {
                console.log(error);
                console.error('هنگام دریافت دسته بندی های برتر خطایی رخ داده است');
                return [];
            })
        )
            .toPromise();
    }
}
