import sanitizeHTML from "./utils";

describe("Unit - SanitizeHTML", () => {
  it("should match the expected text", async () => {
    const textWithHTML = "<p>When the residents of Chester</p>";
    const expectedText = "When the residents of Chester";
    expect(sanitizeHTML(textWithHTML)).toMatch(expectedText);
  });
});
