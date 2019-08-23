import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './dashboard.component';
import { SearchService } from '../core/services/search.service';
import { SoQuestionComponent } from './so-question/so-question.component';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SoQuestionComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    SearchService
  ],
  entryComponents: [
    DashboardComponent,
    SoQuestionComponent,
    WeatherComponent,
  ],
})
export class DashboardModule { }
