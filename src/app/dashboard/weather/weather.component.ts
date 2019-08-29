import { Component, Input } from '@angular/core';
import { IWeatherItem } from './weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent {

  @Input() data: IWeatherItem;
  constructor() { }

}

