import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AvatarSelectionPopupComponent} from '../avatar-selection-popup/avatar-selection-popup.component';

@Component({
    selector: 'app-avatar-button',
    templateUrl: './avatar-button.component.html',
    styleUrls: ['./avatar-button.component.scss']
})
export class AvatarButtonComponent {

    @Input() avatar: string;
    @Input() isUpdating = false;
    @Output() avatarChange = new EventEmitter();

    constructor(public dialog: MatDialog) {
    }

    openAvatarPopup() {
        const avatarDialog = this.dialog.open(AvatarSelectionPopupComponent, {
            width: '80%',
            maxWidth: '450px',
            data: {
                selectedAvatar: this.avatar
            }
        });
        avatarDialog.afterClosed().subscribe(selectedAvatar => {
            if (selectedAvatar) {
                this.avatarChange.emit(selectedAvatar);
            }
        });
    }
}
