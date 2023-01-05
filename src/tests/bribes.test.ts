import { describe, it, expect } from "@jest/globals";
import MinimumBribes from "../modules/bribes";

describe("Minimum Bribes", () => {
  it("should return the number of bribes", () => {
    expect(MinimumBribes([2, 1, 5, 3, 4])).toBe(3);
    expect(MinimumBribes([2, 5, 1, 3, 4])).toBe("Too chaotic");
    expect(MinimumBribes([5, 1, 2, 3, 7, 8, 6, 4])).toBe("Too chaotic");
    expect(MinimumBribes([1, 2, 5, 3, 7, 8, 6, 4])).toBe(7);
  });
});
