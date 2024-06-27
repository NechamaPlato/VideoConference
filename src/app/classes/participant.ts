export class Participant {
    id: number
    name: string;
    isJudge: boolean;
    isCameraOn: boolean;
    isMicOn: boolean;
    constructor(id: number, name: string, isJudge: boolean, isCameraOn: boolean, isMicOn: boolean) {
        this.id = id;
        this.name = name;
        this.isJudge = isJudge;
        this.isCameraOn = isCameraOn;
        this.isMicOn = isMicOn;
    }
}
