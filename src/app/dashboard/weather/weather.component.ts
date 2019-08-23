import { Component, Input } from '@angular/core';
import { IWeatherItem } from '../../core/services/search.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent {

  @Input() data: IWeatherItem;
  constructor() { }

}

