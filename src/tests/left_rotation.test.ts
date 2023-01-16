import { describe, it, expect } from "@jest/globals";
import LeftRotation from "../modules/arrays/left_rotation";

describe("Array Left Rotation", () => {
  it("should return the array rotated", () => {
    expect(LeftRotation([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5, 1, 2]);
    expect(LeftRotation([1, 2, 3, 4, 5], 6)).toEqual([2, 3, 4, 5, 1]);
    expect(
      LeftRotation(
        [
          41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10,
          86, 51,
        ],
        10
      )
    ).toEqual([
      77, 97, 58, 1, 86, 58, 26, 10, 86, 51, 41, 73, 89, 7, 10, 1, 59, 58, 84,
      77,
    ]);
  });
});
