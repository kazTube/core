import {AuthenticationGuard} from './authentication.guard';
import {HowToInsertAnOrderComponent} from '../layout/footer/how-to-insert-an-order/how-to-insert-an-order.component';
import {ContactUsComponent} from '../layout/footer/contact-us/contact-us.component';
import {AboutUsComponent} from '../layout/footer/about-us/about-us.component';
import {FAQComponent} from '../layout/footer/faq/faq.component';
import {FileAComplaintComponent} from '../layout/footer/file-a-complaint/file-a-complaint.component';
import {DesktopFullLayoutComponent} from '../layout/full-layout/desktop-full-layout/desktop-full-layout.component';
import {SimpleLayoutComponent} from '../layout/simple-layout/simple-layout.component';

export class DesktopRoutes {

    static routes = [
        {
            path: '',
            component: DesktopFullLayoutComponent,
            children: [
                {
                    path: 'product/list',
                    loadChildren: 'src/app/product-list/desktop-product-list.module#DesktopProductListModule',
                },
                {
                    path: 'product/detail',
                    loadChildren: 'src/app/product-detail/desktop-product-detail.module#DesktopProductDetailModule',

                },
                {
                    path: 'basket',
                    loadChildren: 'src/app/basket/desktop-basket.module#DesktopBasketModule',
                },
                {
                    path: 'home',
                    loadChildren: 'src/app/home/desktop-home.module#DesktopHomeModule'
                },
                {
                    path: 'pharmacy',
                    loadChildren: 'src/app/pharmacy/desktop-pharmacy.module#DesktopPharmacyModule',
                    canLoad: [AuthenticationGuard],
                    canActivateChild: [AuthenticationGuard]

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
                }
            ]
        },
        {
            path: '',
            component: SimpleLayoutComponent,
            children: [
                {
                    path: 'login',
                    loadChildren: 'src/app/login/login.module#LoginModule',
                },
            ]
        },
        {
            path: 'profile',
            loadChildren: 'src/app/profile/desktop-profile.module#DesktopProfileModule',
            canActivateChild: [AuthenticationGuard]
        },
        {
            path: '**',
            pathMatch: 'full',
            redirectTo: '/home',
        }
    ];
}


