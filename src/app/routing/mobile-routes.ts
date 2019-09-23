import {AuthenticationGuard} from './authentication.guard';
import {MobileFullLayoutComponent} from '../layout/full-layout/mobile-full-layout/mobile-full-layout.component';
import {HowToInsertAnOrderComponent} from '../layout/footer/how-to-insert-an-order/how-to-insert-an-order.component';
import {ContactUsComponent} from '../layout/footer/contact-us/contact-us.component';
import {AboutUsComponent} from '../layout/footer/about-us/about-us.component';
import {FAQComponent} from '../layout/footer/faq/faq.component';
import {FileAComplaintComponent} from '../layout/footer/file-a-complaint/file-a-complaint.component';
import {SimpleLayoutComponent} from '../layout/simple-layout/simple-layout.component';

export class MobileRoutes {

    static routes = [
        {
            path: '',
            component: MobileFullLayoutComponent,
            children: [
                {
                    path: 'product/list',
                    loadChildren: 'src/app/product-list/mobile-product-list.module#MobileProductListModule',
                },
                {
                    path: 'product/detail',
                    loadChildren: 'src/app/product-detail/mobile-product-detail.module#MobileProductDetailModule',

                },
                {
                    path: 'basket',
                    loadChildren: 'src/app/basket/mobile-basket.module#MobileBasketModule',
                },
                {
                    path: 'order',
                    loadChildren: 'src/app/order/mobile-order.module#MobileOrderModule',
                    data: {showSearchBoxInHeader: false},
                    canLoad: [AuthenticationGuard],
                    canActivateChild: [AuthenticationGuard]
                },
                {
                    path: 'comment',
                    loadChildren: 'src/app/comment/mobile-comment.module#MobileCommentModule',
                },
                {
                    path: 'pharmacy',
                    loadChildren: 'src/app/pharmacy/mobile-pharmacy.module#MobilePharmacyModule',
                    canLoad: [AuthenticationGuard],
                    canActivateChild: [AuthenticationGuard]

                },
                {
                    path: 'home',
                    loadChildren: 'src/app/home/mobile-home.module#MobileHomeModule'
                },
                {
                    path: 'how-to-insert-an-order',
                    component: HowToInsertAnOrderComponent
                },

                {
                    path: 'contact-us',
                    component: ContactUsComponent
                },
                {
                    path: 'about-us',
                    component: AboutUsComponent
                },
                {
                    path: 'faq',
                    component: FAQComponent
                },
                {
                    path: 'file-a-complaint',
                    component: FileAComplaintComponent
                },
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: '/home',
                }
            ]
        },
        {
            path: '',
            component: SimpleLayoutComponent,
            children: [
                {
                    path: 'login',
                    loadChildren: 'src/app/login/login.module#LoginModule'
                }
            ]
        },
        {
            path: 'profile',
            loadChildren: 'src/app/profile/mobile-profile.module#MobileProfileModule',
            canActivateChild: [AuthenticationGuard],
            data: {showSearchBoxInHeader: false}
        },
        {path: '**', redirectTo: '/home'}

    ];
}
