import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondsTimerFormatterPipe } from './seconds-timer-formatter.pipe';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginCanActiveGuard } from './login-can-active.guard';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: { animation: 'login' },
        canActivate: [LoginCanActiveGuard]
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];

@NgModule({
    declarations: [SecondsTimerFormatterPipe, LoginComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [LoginComponent, SecondsTimerFormatterPipe]
})
export class LoginModule {
}
