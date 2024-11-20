const Functions = require("./functions.js");

test("String should be capitalized after function is run", () => {
    expect(Functions.capitalize("mary")).toBe("Mary");
})

test("String should be reverted", () => {
    expect(Functions.reverseString("James")).toBe("semaJ");
})

test("Calculator functions should return the right values", () => {
    expect(Functions.calculator.add(1, 1)).toBe(2);
    expect(Functions.calculator.subtract(1, 1)).toBe(0);
    expect(Functions.calculator.divide(2, 1)).toBe(2);
    expect(Functions.calculator.multiply(2, 1)).toBe(2);
})