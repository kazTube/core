import {NgModule} from '@angular/core';
import {MobileGeneralHomePageComponent} from './general-home-page/mobile-general-home-page/mobile-general-home-page.component';
import {MobileUserHomePageComponent} from './user-home-page/mobile-user-home-page/mobile-user-home-page.component';
import {RouterModule, Routes} from '@angular/router';
import {UserHomePageResolver} from './user-home-page/user-home-page.resolver';
import {UserHomePageCanActiveGuard} from './user-home-page/user-home-page-can-active.guard';
import {HomeModule} from './home.module';
import {SharedModule} from '../shared/shared.module';
import {GeneralHomePageCanActiveGuard} from './general-home-page/general-home-page-can-active.guard';

const routes: Routes = [

    {
        path: 'general',
        component: MobileGeneralHomePageComponent,
        canActivate: [GeneralHomePageCanActiveGuard],
        data: {showSearchBoxInHeader: false, animation: 'general-home-page'},
    },
    {
        path: '',
        component: MobileUserHomePageComponent,
        resolve: {resolvedData: UserHomePageResolver},
        canActivate: [UserHomePageCanActiveGuard],
        data: {showSearchBoxInHeader: true, animation: 'user-home-page'},
        runGuardsAndResolvers: 'always'

    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    declarations: [
        MobileGeneralHomePageComponent,
        MobileUserHomePageComponent
    ],
    imports: [
        HomeModule,
        SharedModule,
        RouterModule.forChild(routes),
    ],
    exports: []
})
export class MobileHomeModule {
}
