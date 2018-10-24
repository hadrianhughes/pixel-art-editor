import { color } from './tools';

describe('`color` function', () => {
  it('Returns "#d8d8d8" when passed "grey"', () => {
    expect(color('grey')).toBe('#d8d8d8');
  });

  it('Returns "red" when passed a non-existent key', () => {
    expect(color('undefined')).toBe('red');
  });
});
