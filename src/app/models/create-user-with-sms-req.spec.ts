import { CreateUserWithSmsReq } from './create-user-with-sms-req';

describe('CreateUserWithSmsReq', () => {
  it('should create an instance', () => {
    expect(new CreateUserWithSmsReq("Mia","hello how are you"
)).toBeTruthy();
  });
});
