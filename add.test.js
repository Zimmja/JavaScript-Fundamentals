const add = require('./add');

describe('add', () => {
  it('adds 2 and 2 to get 4', () => {
    expect(add(2,2)).toBe(4);
  });
  it('adds 2 and 6 to get 8', () => {
    expect(add(2,6)).toBe(8);
  });
});