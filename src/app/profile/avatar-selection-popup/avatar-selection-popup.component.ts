import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {UserProfileService} from '../user-profile.service';

@Component({
    selector: 'app-avatar-selection-popup',
    templateUrl: './avatar-selection-popup.component.html',
    styleUrls: ['./avatar-selection-popup.component.scss']
})
export class AvatarSelectionPopupComponent {
    selectedAvatar: string;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                public userProfileService: UserProfileService) {
        this.selectedAvatar = data.selectedAvatar;
    }

    onSelectAvatar(avatar: string) {
        this.selectedAvatar = avatar;
    }
}
