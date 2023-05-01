import { MsgBySmsRequest } from './msg-by-sms-request';

describe('MsgBySmsRequest', () => {
  it('should create an instance', () => {
    expect(new MsgBySmsRequest("Hello you?")).toBeTruthy();
  });
});
