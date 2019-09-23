import {ElementRef, Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AppStateService {
    appContainer: ElementRef;
    private isMobileResolution: boolean;

    constructor(public router: Router) {
        this.isMobileResolution = window.innerWidth < 600;
    }

    isMobile() {
        return this.isMobileResolution;
    }

    isDesktop() {
        return !this.isMobileResolution;
    }

    scrollToTop() {
        if (this.appContainer && this.appContainer.nativeElement) {
            this.appContainer.nativeElement.scrollTop = 0;
        }
    }

}
