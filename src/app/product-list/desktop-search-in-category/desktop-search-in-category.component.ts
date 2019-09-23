import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

@Component({
    selector: 'app-desktop-search-in-category',
    templateUrl: './desktop-search-in-category.component.html',
    styleUrls: ['./desktop-search-in-category.component.scss']
})
export class DesktopSearchInCategoryComponent implements OnInit, OnDestroy {

    @Input() searchText: string;
    @Output() searchInCategory = new EventEmitter<string>();
    @ViewChild('inputBox') inputBox: ElementRef;
    private subscription: Subscription;

    constructor() {
    }

    ngOnInit() {
        this.subscription = fromEvent(this.inputBox.nativeElement, 'input')
            .pipe(
                map((event: any) => {
                    if (event.target.value !== undefined) {
                        this.searchText = event.target.value;
                    }
                    return event.target.value;
                }),
                debounceTime(250),
            )
            .subscribe(value => {
                this.searchInCategory.emit(value);
            });

    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
