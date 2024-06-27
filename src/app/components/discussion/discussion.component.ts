import { Component, OnInit, Input} from '@angular/core';
import { Discussion } from 'src/app/classes/discussion';
import { DiscussionService } from 'src/app/services/discussion.service';

@Component({
  selector: 'discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss','../../app.component.scss']
})
export class DiscussionComponent implements OnInit {
  discussionData:Discussion = DiscussionService.currentDiscussion;
  isRecording:boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.discussionData = DiscussionService.currentDiscussion;
    console.log('p:'+this.discussionData.participants);
  }

  goToFullScreen():void {
    //open full screen
  }

}
