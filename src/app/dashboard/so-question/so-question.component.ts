import { Component, Input } from '@angular/core';
import { ISearchResultItem } from '../../core/services/search.service';

@Component({
  selector: 'app-so-question',
  templateUrl: './so-question.component.html'
})
export class SoQuestionComponent {

  @Input() question: ISearchResultItem;
  constructor() { }

}

