import { EmailLoginRequest } from './email-login-request';

describe('EmailLoginRequest', () => {
  it('should create an instance', () => {
    expect(new EmailLoginRequest(
      "John@gmail.com")).toBeTruthy();
  });
});
