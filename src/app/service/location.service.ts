import { Injectable } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private locations: HousingLocation[] = [
    {
      name: "Acme Fresh Start Housing",
      city: "Chicago",
      state: "IL",
      photo: "../assets/housing-1.jpg",
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: "A113 Transitional Housing",
      city: "Santa Monica",
      state: "CA",
      photo: "../assets/housing-2.jpg",
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      name: "Warm Beds Housing Support",
      city: "Juneau",
      state: "AK",
      photo: "../assets/housing-3.jpg",
      availableUnits: 1,
      wifi: false,
      laundry: false,
    }
  ];

  getLocations(): HousingLocation[] {
    return this.locations;
  }

  getLocationByCity(city: string): HousingLocation | undefined {
    return this.locations.find(location => location.city === city);
  }
}
