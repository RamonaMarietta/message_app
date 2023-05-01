import { MsgByEmailRequest } from './msg-by-email-request';

describe('MsgByEmailRequest', () => {
  it('should create an instance', () => {
    expect(new MsgByEmailRequest(
      "Malcolme@hotmail.com")).toBeTruthy();
  });
});
