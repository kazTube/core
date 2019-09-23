import {APP_INITIALIZER, NgModule} from '@angular/core';
import {InitializerService} from './initializer.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    declarations: [],
    imports: [
        HttpClientModule
    ],
    providers: [
        InitializerService,
        {
            provide: APP_INITIALIZER,
            useFactory: (initializer: InitializerService) => () => initializer.initializeMenu(),
            deps: [InitializerService], multi: true
        },
        {
            provide: APP_INITIALIZER,
            useFactory: (initializer: InitializerService) => () => initializer.initializeTopCategoryList(),
            deps: [InitializerService], multi: true
        },
        {
            provide: APP_INITIALIZER,
            useFactory: (initializer: InitializerService) => () => initializer.getUserProfile(),
            deps: [InitializerService], multi: true
        },
        {
            provide: APP_INITIALIZER,
            useFactory: (initializer: InitializerService) => () => initializer.initializeUserBasket(),
            deps: [InitializerService], multi: true
        },

    ]
})
export class InitializerModule {
}
