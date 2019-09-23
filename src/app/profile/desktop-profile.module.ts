import {NgModule} from '@angular/core';
import {ProfileModule} from './profile.module';
import {RouterModule} from '@angular/router';
import {StateAndCityResolver} from './address-info-form/state-and-city.resolver';
import {DesktopRegisterPageComponent} from './desktop-register-page/desktop-register-page.component';
import {RulesComponent} from './rules/rules.component';
import {DesktopProfilePageComponent} from './desktop-profile-page/desktop-profile-page.component';
import {DesktopProfilePersonalInfoComponent} from './profile-personal-info/desktop-profile-personal-info/desktop-profile-personal-info.component';
import {UserProfileResolver} from './user-profile.resolver';
import {DesktopProfileAddressListComponent} from './profile-address-list/desktop-profile-address-list/desktop-profile-address-list.component';
import {DesktopOrderModule} from '../order/desktop-order.module';
import {DesktopOrderListComponent} from '../order/order-list/desktop-order-list/desktop-order-list.component';
import {OrderListResolver} from '../order/order-list/order-list.resolver';
import {DesktopAddAddressPageComponent} from './add-address-page/desktop-add-address-page/desktop-add-address-page.component';
import {OrderDetailResolver} from '../order/order-detail-page/order-detail.resolver';
import {DesktopOrderDetailPageComponent} from '../order/order-detail-page/desktop-order-detail-page/desktop-order-detail-page.component';
import {SharedModule} from '../shared/shared.module';
import {DesktopFullLayoutComponent} from '../layout/full-layout/desktop-full-layout/desktop-full-layout.component';
import {SimpleLayoutComponent} from '../layout/simple-layout/simple-layout.component';
import {LayoutModule} from '../layout/layout.module';

const routes = [
    {
        path: 'register',
        component: SimpleLayoutComponent,
        children: [
            {
                path: '',
                component: DesktopRegisterPageComponent,
                resolve: {stateAndCity: StateAndCityResolver},
            },
            {
                path: 'address',
                component: DesktopAddAddressPageComponent,
                resolve: {stateAndCity: StateAndCityResolver},
            },
            {
                path: 'rules',
                component: RulesComponent,
                data: {animation: 'personal-info'}
            }]
    },
    {
        path: '',
        component: DesktopFullLayoutComponent,
        children: [
            {
                path: '',
                component: DesktopProfilePageComponent,
                resolve: {
                    userProfile: UserProfileResolver,
                    stateAndCity: StateAndCityResolver,
                    orderList: OrderListResolver
                },
                children: [
                    {
                        path: 'personal-info',
                        component: DesktopProfilePersonalInfoComponent,
                        data: {animation: 'personal-info'}
                    },
                    {
                        path: 'address/list',
                        component: DesktopProfileAddressListComponent,
                        data: {animation: 'personal-info'}
                    },
                    {
                        path: 'order/list',
                        component: DesktopOrderListComponent,
                    },
                    {
                        path: '',
                        redirectTo: 'personal-info'
                    },
                ]
            },
            {
                path: 'order/detail/:id',
                component: DesktopOrderDetailPageComponent,
                resolve: {orderDetail: OrderDetailResolver},
                data: {animation: 'order-detail'}
            },
            {
                path: 'address',
                data: {animation: 'profile-address'},
                children: [
                    {
                        path: 'add',
                        component: DesktopAddAddressPageComponent,
                        resolve: {
                            stateAndCity: StateAndCityResolver,
                            userProfile: UserProfileResolver
                        }
                    },
                    {
                        path: 'edit/:id',
                        component: DesktopAddAddressPageComponent,
                        resolve: {
                            stateAndCity: StateAndCityResolver,
                            userProfile: UserProfileResolver
                        }
                    }
                ]
            },
        ]
    },
    {
        path: '**',
        redirectTo: '/profile/personal-info'
    },
];

@NgModule({
    declarations: [
        DesktopRegisterPageComponent,
        DesktopProfilePageComponent,
        DesktopProfilePersonalInfoComponent,
        DesktopProfileAddressListComponent,
        DesktopAddAddressPageComponent
    ],
    imports: [
        ProfileModule,
        LayoutModule,
        SharedModule,
        DesktopOrderModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    entryComponents: []
})
export class DesktopProfileModule {
}
