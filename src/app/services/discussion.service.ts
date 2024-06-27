import { Injectable } from '@angular/core';
import { Discussion } from '../classes/discussion';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  public static currentDiscussion: Discussion;
  // public static setCurrentDiscussion(discussion: Discussion): void {
  //   this.currentDiscussion = discussion;
  // }

  constructor() { }
}
