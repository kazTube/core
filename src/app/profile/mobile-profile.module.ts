import {NgModule} from '@angular/core';
import {MobileRegisterPersonalInfoComponent} from './mobile-register-personal-info/mobile-register-personal-info.component';
import {MobileProfileAddressListComponent} from './profile-address-list/mobile-profile-address-list/mobile-profile-address-list.component';
import {MobileProfilePersonalInfoComponent} from './profile-personal-info/mobile-profile-personal-info/mobile-profile-personal-info.component';
import {RouterModule} from '@angular/router';
import {UserProfileResolver} from './user-profile.resolver';
import {StateAndCityResolver} from './address-info-form/state-and-city.resolver';
import {ProfileModule} from './profile.module';
import {RulesComponent} from './rules/rules.component';
import {MobileAddAddressPageComponent} from './add-address-page/mobile-add-address-page/mobile-add-address-page.component';
import {SharedModule} from '../shared/shared.module';
import {LayoutModule} from '../layout/layout.module';
import {MobileFullLayoutComponent} from '../layout/full-layout/mobile-full-layout/mobile-full-layout.component';
import {SimpleLayoutComponent} from '../layout/simple-layout/simple-layout.component';

const routes = [
    {
        path: '',
        component: MobileFullLayoutComponent,
        children: [
            {
                path: 'personal-info',
                component: MobileProfilePersonalInfoComponent,
                resolve: {userProfile: UserProfileResolver},
                data: {animation: 'profile-personal-info'},
            },
            {
                path: 'address/list',
                component: MobileProfileAddressListComponent,
                resolve: {userProfile: UserProfileResolver},
                data: {animation: 'profile-address-list'},
            },
        ]
    },
    {
        path: '',
        component: SimpleLayoutComponent,
        children: [
            {
                path: 'register',
                data: {animation: 'personal-info'},
                children: [
                    {
                        path: 'personal-info',
                        component: MobileRegisterPersonalInfoComponent,
                    },
                    {
                        path: 'address',
                        component: MobileAddAddressPageComponent,
                        resolve: {
                            stateAndCity: StateAndCityResolver,
                            userProfile: UserProfileResolver
                        },
                    },
                    {
                        path: 'rules',
                        component: RulesComponent,
                    },
                    {
                        path: '',
                        redirectTo: 'personal-info'
                    }
                ]
            },
            {
                path: 'address',
                data: {animation: 'profile-address'},
                children: [
                    {
                        path: 'add',
                        component: MobileAddAddressPageComponent,
                        resolve: {
                            stateAndCity: StateAndCityResolver,
                            userProfile: UserProfileResolver
                        }
                    },
                    {
                        path: 'edit/:id',
                        component: MobileAddAddressPageComponent,
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
        MobileRegisterPersonalInfoComponent,
        MobileProfileAddressListComponent,
        MobileProfilePersonalInfoComponent,
        MobileAddAddressPageComponent],
    imports: [
        ProfileModule,
        LayoutModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    entryComponents: []

})
export class MobileProfileModule {
}
