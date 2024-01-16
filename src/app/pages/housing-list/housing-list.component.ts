import { Component, OnInit } from '@angular/core';
import { HousingLocation } from '../../housing-location';
import { LocationService } from 'src/app/service/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];

  constructor(private router: Router, private locationService: LocationService) {
    this.locationList = this.locationService.getLocations();
  }

  ngOnInit(): void {
  }
  // mehtod to trigger locationSelectedEvent when a user clicks on a search result @param location of type HousingLocation 
  selectHousingLocation(location: HousingLocation) {
    this.router.navigate(['/housing-details', location.city]);
  }

  /**
   * Method to display a result set to filter the locationList by the user input and display it 
   * @param searchText 
   * @returns filtered result set or none if searchText is empty
   */
  searchHousingLocations(searchText: string) {
    if (!searchText) return;
    this.results = this.locationList.filter(
      (location: HousingLocation) => location.city
        .toLowerCase()
        .includes(
          searchText.toLowerCase()

        ));
    return this.results;
  }
}
