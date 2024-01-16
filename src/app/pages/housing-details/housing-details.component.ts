import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingLocation } from 'src/app/housing-location';
import { LocationService } from 'src/app/service/location.service';

@Component({
  selector: 'app-housing-details',
  templateUrl: './housing-details.component.html',
  styleUrls: ['./housing-details.component.css']
})
export class HousingDetailsComponent implements OnInit {

  selectedLocation: HousingLocation | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private locationService: LocationService) {}

  ngOnInit(): void {
    // Get the location ID from the route parameter
    const locationId = this.route.snapshot.paramMap.get('id');
    if (locationId) {
      // Retrieve the location details based on the city
      this.selectedLocation = this.locationService.getLocationByCity(locationId);
    }
  }
  goBack(): void {
    // Navigate back to the home page or any other desired route
    this.router.navigate(['/']);
  }
}
