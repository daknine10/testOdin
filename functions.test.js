const Functions = require("./functions.js");

test("String should be capitalized after function is run", () => {
    expect(Functions.capitalize("mary")).toBe("Mary");
})