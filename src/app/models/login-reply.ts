export class LoginReply {
    sessiontoken: string;
    succes: boolean;
    error: string;

    constructor(sessiontoken: string, succes: boolean, error: string) {
        this.sessiontoken = sessiontoken;
        this.succes = succes;
        this.error = error;
    }


}
