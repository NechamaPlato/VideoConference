import { Participant } from "./participant";

export class Discussion {
    company: string;
    committee: string;
    fileNumber: string;
    participants: Participant[];
    subject: string;
    startTime:Date;

    constructor(company: string, committee: string, fileNumber: string, participants: Participant[], subject: string, startTime:Date) {
        this.company = company;
        this.committee = committee;
        this.fileNumber = fileNumber;
        this.participants = participants;
        this.subject = subject;
        this.startTime = startTime;
    }
}
