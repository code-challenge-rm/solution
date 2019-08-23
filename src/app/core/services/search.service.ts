import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class SearchService {

    private static readonly apiUrl =
        "https://api.stackexchange.com/2.2/search?pagesize=20&order=desc&sort=activity&site=stackoverflow&intitle=";

    constructor(private http: Http) {

    }

    search(keyword: string): Observable<ISoAPIResponse> {
        return this.http.get(SearchService.apiUrl + keyword)
            .map((res: Response) => {
                let data = res.json();
                console.log("API USAGE: " + data.quota_remaining + " of " + data.quota_max + " requests available" );
                return data;
            })
            .catch((err: Response) => Observable.of(err.json()));
    }

export interface ISoOwner {
  reputation: number,
  user_id: number,
  user_type: string,
  accept_rate: number,
  profile_image: string,
  display_name: string,
  link: string,
}

export interface ISearchResultItem {
  tags: Array<string>,
  owner: ISoOwner,
  is_answered: boolean,
  view_count: number,
  closed_date: number,
  answer_count: number,
  score: number,
  last_activity_date: number,
  creation_date: number,
  last_edit_date: number,
  question_id: number,
  link: string,
  closed_reason: string,
  title: string,
}

export interface ISoAPIResponse {
  items: Array<ISearchResultItem>,
}

export interface IWeatherItem {
  "Datum": string,
  "Zeit": string,
  "Temp. A.": number,
  "Temp. 3": number,
  "Feuchte A.": number,
  "Luftdruck": number,
  "Regen": number,
  "Wind": number,
  "Richtung": number,
  "Helligkeit": number
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
