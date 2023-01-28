import { describe, expect, it } from "@jest/globals";
import SmallestPositive from "../modules/arrays/smallest_positive";

describe("Smallest Positive", () => {
  it("should return the smallest positive number", () => {
    expect(SmallestPositive([1, 3, 6, 4, 1, 2])).toBe(5);
    expect(SmallestPositive([1, 2, 3])).toBe(4);
  });
  it("should return 1", () => {
    expect(SmallestPositive([-1, -3])).toBe(1);
  });
});
