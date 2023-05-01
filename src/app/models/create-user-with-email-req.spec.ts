import { CreateUserWithEmailReq } from './create-user-with-email-req';

describe('CreateUserWithEmailReq', () => {
  it('should create an instance', () => {
    expect(new CreateUserWithEmailReq(
        "John@gmail.com",'Doe','1234'
      )).toBeTruthy();
  });
});
