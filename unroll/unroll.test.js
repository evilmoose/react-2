const unroll = require("./unroll");


describe('unroll function tests', () => {
  test('unrolls a 4x4 square matrix correctly', () => {
      expect(unroll([
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
          [13, 14, 15, 16]
      ])).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  });

  test('unrolls a 3x3 matrix correctly', () => {
      expect(unroll([
          ["a", "b", "c"],
          ["d", "e", "f"],
          ["g", "h", "i"]
      ])).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  });

  test('unrolls a 1x1 matrix correctly', () => {
      expect(unroll([
          [1]
      ])).toEqual([1]);
  });

  test('unrolls a 2x2 matrix correctly', () => {
      expect(unroll([
          [1, 2],
          [3, 4]
      ])).toEqual([1, 2, 4, 3]);
  });
});


