import { Component, Input, OnInit } from '@angular/core';
import { Discussion } from 'src/app/classes/discussion';
import { Participant } from 'src/app/classes/participant';
import { DiscussionService } from 'src/app/services/discussion.service';

@Component({
  selector: 'user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.scss','../../app.component.scss']
})
export class UserScreenComponent implements OnInit {
  @Input() user: Participant;
  discussionData:Discussion;
  constructor() { }

  ngOnInit(): void {
    this.discussionData = DiscussionService.currentDiscussion;
  }
  getMineUser():Participant{
    //return the current user
    return new Participant(2, 'Jacob', false, false, true);
  }

  isMeUser(id:number):boolean {
    return id==this.getMineUser().id;
  }

}
