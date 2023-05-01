export class CreateUserWithSmsReq {
    name: string;
    sms: string;

    constructor(name: string, sms: string) {
        this.name = name;
        this.sms = sms;

    }

}

