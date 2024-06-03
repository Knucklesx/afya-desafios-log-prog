const { doubleValues } = require("../desafio-4");

test("doubles the values in an array", () => {
	expect(doubleValues([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
	expect(doubleValues([0, -1, -2])).toEqual([0, -2, -4]);
});
