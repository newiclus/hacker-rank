import { expect, describe, it } from "@jest/globals";
import ArrayManipulation from "../modules/arrays/array_manipulation";

describe("Array Manipulation", () => {
  it("should return the maximum value", () => {
    expect(
      ArrayManipulation(5, [
        [1, 2, 100],
        [2, 5, 100],
        [3, 4, 100],
      ])
    ).toBe(200);

    expect(
      ArrayManipulation(10, [
        [1, 5, 3],
        [4, 8, 7],
        [6, 9, 1],
      ])
    ).toBe(10);

    expect(
      ArrayManipulation(10, [
        [2, 6, 8],
        [3, 5, 7],
        [1, 8, 1],
        [5, 9, 15],
      ])
    ).toBe(31);
  });
});

// 1   2   3   4   5   6   7   8   9   10
//----------------------------------------
// 0   0   0   0   0   0   0   0   0    0
// 0   8   8   8   8   8   0   0   0    0
// 0   8   8   15  15  15  15  15  8    0
// 1   9   9   16  16  16  16  16  8    0
// 0   9   9   16  16  31  31  31  8    0
//
// Max value is 31
