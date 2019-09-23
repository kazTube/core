import {NgModule} from '@angular/core';
import {DesktopPharmacyPageComponent} from './pharmacy-page/desktop-pharmacy-page/desktop-pharmacy-page.component';
import {RouterModule, Routes} from '@angular/router';
import {PharmacyPageResolver} from './pharmacy-page/pharmacy-page.resolver';
import {PharmacyModule} from './pharmacy.module';
import {DesktopPharmacySpecialOfferProductListComponent} from './desktop-pharmacy-special-offer-product-list/desktop-pharmacy-special-offer-product-list.component';
import {ContactSupportPageComponent} from './contact-support-page/contact-support-page.component';
import {SubscriptionCompletedPageComponent} from './subscription-completed-page/subscription-completed-page.component';
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
        component: DesktopPharmacyPageComponent,
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
        DesktopPharmacyPageComponent,
        DesktopPharmacySpecialOfferProductListComponent],
    imports: [
        PharmacyModule,
        RouterModule.forChild(routes),
    ]
})
export class DesktopPharmacyModule {
}
