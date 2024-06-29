import { Component, OnInit } from '@angular/core';
import { Discussion } from './classes/discussion';
import { Participant } from './classes/participant';
import { DiscussionService } from './services/discussion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  participants: Participant[] = [
    new Participant(1, 'Israela Israeli', true, false, true, true),
    new Participant(4, 'Aharon Aharoni', true, false, true, true),
    new Participant(2, 'Jacob Jacobi', false, true, false, true),
    new Participant(3, 'Shoshana Shoshani', false, false, true, false),
    new Participant(5, 'Shir Shiri', false, false, true, false)
  ];
  discussion = new Discussion('Justice Department', 'COVID-19', '123456-789', this.participants, 'Participation in fixed expenses', new Date());
  title = 'VCtest';
  ngOnInit(): void {
    DiscussionService.currentDiscussion = this.discussion;
  }
}
