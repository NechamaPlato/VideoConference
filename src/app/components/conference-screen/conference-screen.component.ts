import { Component, Input, OnInit } from '@angular/core';
import { Participant } from 'src/app/classes/participant';
import { DiscussionService } from 'src/app/services/discussion.service';

@Component({
  selector: 'conference-screen',
  templateUrl: './conference-screen.component.html',
  styleUrls: ['./conference-screen.component.scss', '../../app.component.scss']
})
export class ConferenceScreenComponent implements OnInit {
  @Input() participants: Participant[];
  isCameraOn: boolean = true;
  isMicOn: boolean = true;
  discussionTime: Date;
  private intervalId: any;
  meetingDuration: string;

  constructor() {

  }

  ngOnInit(): void {
    this.discussionTime = DiscussionService.currentDiscussion?.startTime;
    this.startTimer();
  }

  get judgesParticipants() {
    return this.participants.filter(p => { return p.isJudge });
  }
  get sidesParticipants() {
    return this.participants.filter(p => { return !p.isJudge });
  }
  turnCamera(): void {
    this.isCameraOn = !this.isCameraOn;
    //turn on/off computer camera
  }

  turnMic(): void {
    this.isMicOn = !this.isMicOn;
    //turn on/off computer mic
  }

  shareScreen(): void {
    //share user screen
  }
  startTimer(): void {
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 1000); // Update every second
  }

  updateTime() :void {
    const now = new Date().getTime();
    const start = this.discussionTime.getTime();
    const diff = now - start;

    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    const hoursStr = hours.toString().padStart(2, '0');
    const minutesStr = minutes.toString().padStart(2, '0');
    const secondsStr = seconds.toString().padStart(2, '0');
    this.meetingDuration = `${hoursStr}:${minutesStr}:${secondsStr}`;
  }

}
