import { Component, Input, OnInit } from '@angular/core';
import { Participant } from 'src/app/classes/participant';

@Component({
  selector: 'discussion-sidebar',
  templateUrl: './discussion-sidebar.component.html',
  styleUrls: ['./discussion-sidebar.component.scss','../../app.component.scss']
})
export class DiscussionSidebarComponent implements OnInit {
  @Input() participants: Participant[];
  constructor() { }

  ngOnInit(): void {
  }

  leaveCall(): void {
    //leave call
  }
}
