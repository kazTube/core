import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MapLocation} from '../../../profile/map-button/MapLocation';
import {NotificationService} from '../notification/notification.service';
import {AfterViewInit, Component, ElementRef, Inject, NgZone, ViewChild} from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {UtilService} from '../../../core/services/util.service';
import {AppStateService} from '../../../core/services/app-state.service';

@Component({
    selector: 'app-map-pop-up',
    templateUrl: './map-pop-up.component.html',
    styleUrls: ['./map-pop-up.component.scss'],
})
export class MapPopUpComponent implements AfterViewInit {
    @ViewChild('addressSearch') addressSearch: ElementRef;
    addressSearchValue = '';
    markerLocation: MapLocation;
    waitingForGettingLocation = false;
    icon = {
        url: '../assets/svgs/pin.svg',
        scaledSize: {
            width: 16,
            height: 33
        }
    };
    readonly = false;
    isFullVersion = false;
    title = 'موقعیت آدرس شما';
    isMapReady = false;
    showMarker = true;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<MapPopUpComponent>,
        public notificationService: NotificationService,
        public utilService: UtilService,
        public appStateService: AppStateService,
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone,
    ) {
        this.markerLocation = data.location;
        if (data.readonly) {
            this.readonly = data.readonly;
        }
        if (data.title) {
            this.title = data.title;
        }
        this.isFullVersion = this.appStateService.isDesktop() && !this.readonly;
    }

    ngAfterViewInit() {
        if (this.isFullVersion) {
            this.mapsAPILoader.load().then(() => {
                // @ts-ignore
                const autocomplete = new google.maps.places.Autocomplete(this.addressSearch.nativeElement);
                // @ts-ignore
                google.maps.event.addListener(autocomplete, 'place_changed', () => {
                    const place = autocomplete.getPlace();
                    this.ngZone.run(() => {
                        this.markerLocation.lat = place.geometry.location.lat();
                        this.markerLocation.lng = place.geometry.location.lng();
                        this.markerLocation.zoom = 17;
                        this.addressSearchValue = '';
                    });
                });
            });
        }
    }

    setLocation() {
        this.dialogRef.close(this.markerLocation);
    }

    setMarkerLocation(event: any) {
        if (!this.readonly) {
            this.showMarker = false;
            this.markerLocation.lat = event.coords.lat;
            this.markerLocation.lng = event.coords.lng;
            setTimeout(() => {
                this.showMarker = true;
            }, 10);
        }
    }

    getCurrentLocation() {
        this.waitingForGettingLocation = true;
        this.utilService.getCurrentLocation().subscribe(location => {
            this.markerLocation.lat = location.latitude;
            this.markerLocation.lng = location.longitude;
            this.markerLocation.zoom = 17;
            this.waitingForGettingLocation = false;
        }, () => {
            this.notificationService.errorMessage('دریافت موقعیت با خطا مواجه شد.');
            this.waitingForGettingLocation = false;
        });
    }

    confirmLocation() {
        this.dialogRef.close(true);
    }

    cancel() {
        this.dialogRef.close(false);
    }

    mapIsReady(googleMap) {
        this.isMapReady = true;
    }

}
