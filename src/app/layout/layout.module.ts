import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {ContactUsComponent} from './footer/contact-us/contact-us.component';
import {HowToInsertAnOrderComponent} from './footer/how-to-insert-an-order/how-to-insert-an-order.component';
import {AboutUsComponent} from './footer/about-us/about-us.component';
import {FAQComponent} from './footer/faq/faq.component';
import {FileAComplaintComponent} from './footer/file-a-complaint/file-a-complaint.component';
import {SimpleLayoutComponent} from './simple-layout/simple-layout.component';
import {CenterMatMenuDirective} from './center-mat-menu.directive';
import {BaseFullLayoutComponent} from './full-layout/base-full-layout.component';
import {BaseHeaderComponent} from './header/base-header.component';
import {BaseSubMenuComponent} from './sub-menu/base-sub-menu.component';
import {BaseMenuComponent} from './menu/base-menu.component';
import {MobileFullLayoutComponent} from './full-layout/mobile-full-layout/mobile-full-layout.component';
import {MobileHeaderComponent} from './header/mobile-header/mobile-header.component';
import {MobileMenuComponent} from './menu/mobile-menu/mobile-menu.component';
import {MobileSubMenuComponent} from './sub-menu/mobile-sub-menu/mobile-sub-menu.component';
import {DesktopHeaderComponent} from './header/desktop-header/desktop-header.component';
import {DesktopFullLayoutComponent} from './full-layout/desktop-full-layout/desktop-full-layout.component';
import {DesktopMenuComponent} from './menu/desktop-menu/desktop-menu.component';
import {DesktopSubMenuComponent} from './sub-menu/desktop-sub-menu/desktop-sub-menu.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [
        FooterComponent,
        HowToInsertAnOrderComponent,
        ContactUsComponent,
        AboutUsComponent,
        FAQComponent,
        FileAComplaintComponent,
        SimpleLayoutComponent,
        CenterMatMenuDirective,
        BaseFullLayoutComponent,
        BaseHeaderComponent,
        BaseMenuComponent,
        BaseSubMenuComponent,
        MobileFullLayoutComponent,
        MobileHeaderComponent,
        MobileMenuComponent,
        MobileSubMenuComponent,
        DesktopHeaderComponent,
        DesktopFullLayoutComponent,
        DesktopMenuComponent,
        DesktopSubMenuComponent],
    imports: [
        CommonModule,
        SharedModule,
    ],
    entryComponents: [
        HowToInsertAnOrderComponent,
        ContactUsComponent,
        AboutUsComponent,
        FAQComponent,
        FileAComplaintComponent,
        SimpleLayoutComponent,
        DesktopFullLayoutComponent,
        MobileFullLayoutComponent
    ]
})
export class LayoutModule {
}
