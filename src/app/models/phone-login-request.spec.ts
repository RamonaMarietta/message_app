import { PhoneLoginRequest } from './phone-login-request';

describe('PhoneLoginRequest', () => {
  it('should create an instance', () => {
    expect(new PhoneLoginRequest("+32467711700")).toBeTruthy();
  });
});
