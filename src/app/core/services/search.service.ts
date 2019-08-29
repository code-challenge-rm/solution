import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import { IWeatherItem } from '../../dashboard/weather/weather.model';
import { ISoAPIResponse } from './search-result-wrap.model';

@Injectable()
export class SearchService {

    private static readonly apiUrl =
        "https://api.stackexchange.com/2.2/search?pagesize=10&order=desc&sort=activity&site=stackoverflow&intitle=";

    constructor(private http: Http) {

    }

    search(keyword: string): Observable<ISoAPIResponse> {
        return this.http.get(SearchService.apiUrl + keyword)
            .pipe(map((res: Response) => {
                let data = res.json();
                console.log("API USAGE: " + data.quota_remaining + " of " + data.quota_max + " requests available" );
                return data;
            }));
    }

    getWeatherData(): Observable<IWeatherItem[]> {
      return this.http.get('assets/weatherdata.json')
        .pipe(map((response: any) => response.json()))
    }
}

/*
  {
    "Datum": "",
    "Zeit": "",
    "Temp. A.": "°C",
    "Temp. 3": "°C",
    "Feuchte A.": "%",
    "Luftdruck": "",
    "Regen": "mm",
    "Wind": "km/h",
    "Richtung": "°",
    "Helligkeit": "h"
  },
*/
