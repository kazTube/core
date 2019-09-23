import {NgModule} from '@angular/core';
import {MobilePharmacyPageComponent} from './pharmacy-page/mobile-pharmacy-page/mobile-pharmacy-page.component';
import {RouterModule, Routes} from '@angular/router';
import {PharmacyPageResolver} from './pharmacy-page/pharmacy-page.resolver';
import {PharmacyModule} from './pharmacy.module';
import {ContactSupportPageComponent} from './contact-support-page/contact-support-page.component';
import {SubscriptionCompletedPageComponent} from './subscription-completed-page/subscription-completed-page.component';
import {SharedModule} from '../shared/shared.module';
import {UserProfileResolver} from '../profile/user-profile.resolver';

const routes: Routes = [
    {
        path: 'contact/support/:hixCode',
        component: ContactSupportPageComponent
    },
    {
        path: 'subscription/completed/:hixCode',
        component: SubscriptionCompletedPageComponent
    },
    {
        path: ':hixCode',
        component: MobilePharmacyPageComponent,
        data: {animation: 'pharmacy'},
        resolve: {
            resolvedData: PharmacyPageResolver,
            userProfile: UserProfileResolver
        }
    },
    {
        path: '**',
        redirectTo: '/home'
    }

];

@NgModule({
    declarations: [
        MobilePharmacyPageComponent],
    imports: [
        PharmacyModule,
        SharedModule,
        RouterModule.forChild(routes)

    ],
    entryComponents: []
})
export class MobilePharmacyModule {
}
