import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {

    public showSearchBox = true;
    private isMenuOpen = new BehaviorSubject(false);
    public isMenuOpen$ = this.isMenuOpen.asObservable();


    constructor() {
    }

    toggleMenu() {
        this.isMenuOpen.next(!this.isMenuOpen.getValue());
    }

    closeMenu() {
        this.isMenuOpen.next(false);
    }

}
