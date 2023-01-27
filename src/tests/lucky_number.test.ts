import { describe, it, expect } from "@jest/globals";
import LuckyNumber from "../modules/arrays/lucky_number";

describe("Lucky Number", () => {
  it("should return the lucky number", () => {
    expect(LuckyNumber([1, 2, 2, 3, 3, 4, 4, 4])).toBe(2);
    expect(LuckyNumber([1, 2, 2, 3, 3, 3, 3])).toBe(2);
    expect(LuckyNumber([1, 2, 2, 3, 3, 3, 4, 4])).toBe(3);
  });
  it("should not return any lucky number", () => {
    expect(LuckyNumber([1, 1, 2, 3, 4, 5])).toBe(-1);
    expect(LuckyNumber([2, 3, 3, 4, 4, 4])).toBe(-1);
  });
});
