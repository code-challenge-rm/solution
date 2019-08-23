import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ISoAPIResponse, ISearchResultItem, SearchService } from '../core/services/search.service';
import { map, mergeMap, take, takeUntil, zip } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  typescript$ = new Observable<ISearchResultItem[]>();
  angular2$ = new Observable();
  weatherData = [];

  private ngUnsubscribe = new Subject();

  constructor(
    private searchService: SearchService,
  ) { }

  ngOnInit(): void {
    this.typescript$ = this.searchOnSO('TypeScript');
    this.angular2$ = this.searchOnSO('Angular2');

    const weatherData$ = this.searchService.getWeatherData();
    const weatherQuestions$ = this.searchOnSO('Weather');

    this.toObservable(weatherQuestions$).pipe(
      zip(this.toObservable(weatherData$)),
      mergeMap((el: any[]) => el),
      take(10),
      takeUntil(this.ngUnsubscribe),
    ).subscribe((el) => {
      this.weatherData.push(el);
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next()
    this.ngUnsubscribe.complete();
  }

  trackById(index, item) {
    return item.id;
  }

  private toObservable(obs: Observable<any>) {
    return obs.pipe(mergeMap((el: any[]) => Observable.from(el)));
  }

  private searchOnSO(term: string) {
    return this.searchService.search(term).pipe(
      map((res: ISoAPIResponse) => res.items)
    );
  }

}
