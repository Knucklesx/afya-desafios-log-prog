const { findMaxValue } = require("../desafio-7");

test("finds the maximum value in an array", () => {
	expect(findMaxValue([1, 2, 3, 4, 5])).toBe(5);
	expect(findMaxValue([-1, -2, -3, -4])).toBe(-1);
});
