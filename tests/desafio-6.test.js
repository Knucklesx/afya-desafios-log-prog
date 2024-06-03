const { sumValues } = require("../desafio-6");

test("sums the values in an array", () => {
	expect(sumValues([1, 2, 3, 4])).toBe(10);
	expect(sumValues([5, -5, 10])).toBe(10);
});
