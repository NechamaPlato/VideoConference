import { Injectable } from '@angular/core';
import { Discussion } from '../classes/discussion';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  public static currentDiscussion: Discussion;

  constructor() { }
}
