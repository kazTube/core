import {MatDialog} from '@angular/material';
import {MapLocation} from './MapLocation';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Component, Input} from '@angular/core';
import {MapPopUpComponent} from '../../shared/components/map-pop-up/map-pop-up.component';

@Component({
    selector: 'app-map-button',
    templateUrl: './map-button.component.html',
    styleUrls: ['./map-button.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: MapButtonComponent,
            multi: true
        }
    ]
})
export class MapButtonComponent implements ControlValueAccessor {

    @Input() location: FormControl = new FormControl();
    @Input() text: string;
    @Input() variation: string;
    locationChange: any;

    constructor(public dialog: MatDialog) {
    }

    get buttonClass() {
        return 'map-add-button ' + 'map-' + this.variation + '-button';
    }

    registerOnChange(fn: any) {
        this.locationChange = fn;
    }

    registerOnTouched(fn: any) {
    }

    setDisabledState(isDisabled: boolean) {
    }

    writeValue(location: MapLocation) {
        this.location.setValue(location);
    }

    openMapPopup() {
        const dialogRef = this.dialog.open(MapPopUpComponent, {
                panelClass: 'map-overlay',
                data: {
                    location: this.location.value ?
                        new MapLocation(this.location.value.lat, this.location.value.lng, this.location.value.zoom)
                        : new MapLocation(35.701378, 51.386010, 11)
                }
            }
        );
        dialogRef.afterClosed().subscribe((location: MapLocation) => {
            if (location) {
                this.location.setValue(location);
                this.locationChange(location);
            }
        });
    }
}
