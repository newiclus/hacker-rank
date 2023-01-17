import { describe, it, expect } from "@jest/globals";
import MinimumSwaps from "../modules/arrays/minimum_swaps";

describe("Minimum Swaps", () => {
  it("should return the minimum number of swaps", () => {
    expect(MinimumSwaps([4, 3, 1, 2])).toEqual(3);
    expect(MinimumSwaps([2, 3, 4, 1, 5])).toEqual(3);
    expect(MinimumSwaps([1, 3, 5, 2, 4, 6, 7])).toEqual(3);
  });
});
