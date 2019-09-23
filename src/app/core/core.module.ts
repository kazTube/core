import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpResponseInterceptor } from './http-interceptors/http-response.interceptor';
import { HttpRequestInterceptor } from './http-interceptors/http-request.interceptor';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InitializerModule } from '../initializer/initializer.module';
import { NguCarouselModule } from '@ngu/carousel';
import { StarRatingModule } from 'angular-star-rating';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { LottieAnimationViewModule } from 'ng-lottie';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
    declarations: [],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpResponseInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpRequestInterceptor,
            multi: true
        }
    ],
    imports: [
        HttpClientModule,
        StarRatingModule.forRoot(),
        MatProgressButtonsModule.forRoot(),
        LottieAnimationViewModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDAOiB9xL9YiFvoQlIx8DIokpmDUrNHdBY',
            libraries: ['places']
        })
    ],
    exports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        GooglePlaceModule,
        LayoutModule,
        InitializerModule,
        NguCarouselModule,
        AgmCoreModule,
        StarRatingModule,
        MatProgressButtonsModule
    ],
    entryComponents: []
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
