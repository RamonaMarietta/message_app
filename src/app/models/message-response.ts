export class MessageResponse {
    sender: string;
    receivers: string;
    body: string;

    constructor(sender: string, receivers: string, body: string) {
        this.sender = sender;
        this.receivers = receivers;
        this.body = body;

    }
}
