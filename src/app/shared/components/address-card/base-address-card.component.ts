import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AddressDTO} from '../../../dto/profile/AddressDTO';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ConfirmPopUpComponent} from '../confirm-pop-up/confirm-pop-up.component';

@Component({
    template: ''
})
export class BaseAddressCardComponent {


    @Input() address: AddressDTO;
    @Input() isSelected: boolean;

    @Output() select = new EventEmitter();
    @Output() delete = new EventEmitter();
    @Output() edit = new EventEmitter();

    constructor(public dialog: MatDialog) {
    }

    onSelect() {
        this.select.emit(this.address.addressId);
    }

    onEdit() {
        this.edit.emit(this.address.addressId);

    }

    onDelete() {
        this.showConfirmation().afterClosed().subscribe(isConfirmed => {
            if (isConfirmed) {
                this.delete.emit(this.address.addressId);
            }
        });
    }

    protected showConfirmation(): MatDialogRef<ConfirmPopUpComponent, any> {
        return this.dialog.open(ConfirmPopUpComponent, {
                width: '25%',
                minWidth: '265px',
                height: '200px',
                data: {msg: 'آیا از حذف این آدرس اطمینان دارید؟'}
            }
        );
    }
}
