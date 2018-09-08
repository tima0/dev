import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-find-provider',
  templateUrl: './find-provider.component.html',
  styleUrls: ['./find-provider.component.scss']
})
export class FindProviderComponent implements OnInit {
  lat: number;
  lng: number;


  constructor() { }

  ngOnInit() {
    this.getUserLocation();

  }

  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

      });
    }
  }
}
