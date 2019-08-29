import { ISoOwner } from '../../dashboard/so-question/so-question-owner.model';

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
