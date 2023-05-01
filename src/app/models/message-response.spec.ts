import { MessageResponse } from './message-response';

describe('MessageResponse', () => {
  it('should create an instance', () => {
    expect(new MessageResponse("Malcolm","Lola","hey how are u?")).toBeTruthy();
  });
});
