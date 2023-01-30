import { expect, describe, it } from "@jest/globals";
import MaxProfit from "../modules/arrays/max_profit";

describe("Max Profit", () => {
  it("should return the max profit", () => {
    expect(MaxProfit([7, 1, 3, 5, 6, 4])).toBe(5);
    expect(MaxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
});
