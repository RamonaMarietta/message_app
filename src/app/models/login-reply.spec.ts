import { LoginReply } from './login-reply';

describe('LoginReply', () => {
  it('should create an instance', () => {
    expect(new LoginReply("new token",true,"succes"
)).toBeTruthy();
  });
});
