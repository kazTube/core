import {NgModule} from '@angular/core';
import {HomeModule} from './home.module';
import {RouterModule, Routes} from '@angular/router';
import {DesktopGeneralHomePageComponent} from './general-home-page/desktop-general-home-page/desktop-general-home-page.component';
import {DesktopUserHomePageComponent} from './user-home-page/desktop-user-home-page/desktop-user-home-page.component';
import {UserHomePageResolver} from './user-home-page/user-home-page.resolver';
import {UserHomePageCanActiveGuard} from './user-home-page/user-home-page-can-active.guard';
import {DesktopDaroopinVitrinComponent} from './desktop-daroopin-vitrin/desktop-daroopin-vitrin.component';
import {SharedModule} from '../shared/shared.module';
import {GeneralHomePageCanActiveGuard} from './general-home-page/general-home-page-can-active.guard';

const routes: Routes = [

    {
        path: 'general',
        component: DesktopGeneralHomePageComponent,
        canActivate: [GeneralHomePageCanActiveGuard],
        data: {showSearchBoxInHeader: false, animation: 'general-home-page'},
    },
    {
        path: '',
        component: DesktopUserHomePageComponent,
        resolve: {resolvedData: UserHomePageResolver},
        canActivate: [UserHomePageCanActiveGuard],
        data: {showSearchBoxInHeader: false, animation: 'user-home-page'},
        runGuardsAndResolvers: 'always'

    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    declarations: [
        DesktopGeneralHomePageComponent,
        DesktopUserHomePageComponent,
        DesktopDaroopinVitrinComponent],
    imports: [
        HomeModule,
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class DesktopHomeModule {
}
