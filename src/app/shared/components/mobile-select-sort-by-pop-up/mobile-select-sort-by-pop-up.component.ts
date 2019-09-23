import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SORT_BY_BESTSELLING, SORT_BY_MOST_POPULAR, SORT_BY_MOST_VIEWED, SORT_BY_NEWEST} from './model/SortByOption';

@Component({
    selector: 'app-mobile-select-sort-by-dialog',
    templateUrl: './mobile-select-sort-by-pop-up.component.html',
    styleUrls: ['./mobile-select-sort-by-pop-up.component.scss']
})


export class MobileSelectSortByPopUpComponent {

    selectedSortById = 1;
    sortByOptions = [
        SORT_BY_MOST_VIEWED,
        SORT_BY_MOST_POPULAR,
        SORT_BY_NEWEST,
        SORT_BY_BESTSELLING
    ];

    constructor(public dialogRef: MatDialogRef<MobileSelectSortByPopUpComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    onCancel() {
        this.dialogRef.close();
    }

    getSelectedOption() {
        return this.sortByOptions.filter(sortByOption => sortByOption.id === this.selectedSortById)[0];
    }
}
