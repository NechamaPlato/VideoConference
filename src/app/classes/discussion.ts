import { Participant } from "./participant";

export class Discussion {
    company: string;
    committee: string;
    fileNumber: string;
    participants: Participant[];
    subject: string;

    constructor(company: string, committee: string, fileNumber: string, participants: Participant[], subject: string) {
        this.company = company;
        this.committee = committee;
        this.fileNumber = fileNumber;
        this.participants = participants;
        this.subject = subject;
    }
}
