import { default as handler } from '../../pages/api/hello';

describe('API Hello', () => {
  it('should be a function', () => {
    expect(typeof handler).toBe('function');
  });
});