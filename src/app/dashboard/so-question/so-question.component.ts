import { Component, Input } from '@angular/core';
import { ISearchResultItem } from '../../core/services/search-result.model';

@Component({
  selector: 'app-so-question',
  templateUrl: './so-question.component.html'
})
export class SoQuestionComponent {

  @Input() question: ISearchResultItem;
  constructor() { }

}

