import { Component, Input, OnInit } from '@angular/core';
import { Participant } from 'src/app/classes/participant';

@Component({
  selector: 'conference-screen',
  templateUrl: './conference-screen.component.html',
  styleUrls: ['./conference-screen.component.scss','../../app.component.scss']
})
export class ConferenceScreenComponent implements OnInit {
  @Input() participants: Participant[];
  isCameraOn: boolean = true;
  isMicOn: boolean = true;
  constructor() { }

  ngOnInit(): void {
    console.log('p:' + this.participants);
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

}
