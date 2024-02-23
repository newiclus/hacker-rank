import { expect, describe, it } from "@jest/globals";
import MakeAnagrams from "../modules/strings/making_anagrams";

describe("Make Anagrams", () => {
  it("should return the number of characters to delete", () => {
    expect(MakeAnagrams("cde", "dcf")).toBe(2);
    expect(MakeAnagrams("abc", "cde")).toBe(4);
    expect(MakeAnagrams("showman", "woman")).toBe(2);
    expect(
      MakeAnagrams("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")
    ).toBe(30);
  });
});
