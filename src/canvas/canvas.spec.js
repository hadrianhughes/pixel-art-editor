import { createNewLayer } from '../canvas';

describe('`createNewLayer` function', () => {
  const x = 5;
  const y = 10;
  const newLayer = createNewLayer(x, y);

  it('Should return an array of y arrays', () => {
    expect(newLayer.length).toBe(y);
  });

  it('Arrays within returned array should be of x length', () => {
    expect(newLayer.every(row => row.length === x)).toBe(true);
  });

  it('All values in nested arrays should be 0', () => {
    expect(newLayer.every(row => row.every(col => col === null))).toBe(true);
  });
});
