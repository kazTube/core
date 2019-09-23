import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {NotificationComponent} from './notification.component';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    private config: MatSnackBarConfig = new MatSnackBarConfig();
    private successClassList = ['daroopin-notification', 'daroopin-notification-success'];
    private errorClassList = ['daroopin-notification', 'daroopin-notification-error'];
    private infoClassList = ['daroopin-notification', 'daroopin-notification-info'];

    constructor(private snackBar: MatSnackBar) {
        this.config.duration = 3000;
    }

    successMessage(message: string) {
        this.config.panelClass = this.successClassList;
        this.config.data = message;
        this.snackBar.openFromComponent(NotificationComponent, this.config);
    }

    errorMessage(message: string) {
        this.config.panelClass = this.errorClassList;
        this.config.data = message;
        this.snackBar.openFromComponent(NotificationComponent, this.config);
    }

    infoMessage(message: string) {
        this.config.panelClass = this.infoClassList;
        this.config.data = message;
        this.snackBar.openFromComponent(NotificationComponent, this.config);
    }
}
