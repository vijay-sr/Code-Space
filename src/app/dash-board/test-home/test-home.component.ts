import { Component } from '@angular/core';
import { Housinglocation } from '../../housinglocation';

@Component({
  selector: 'app-test-home',
  templateUrl: './test-home.component.html',
  styleUrl: './test-home.component.css',
})
export class TestHomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocation: Housinglocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
