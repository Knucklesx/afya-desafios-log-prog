const { filterEvenNumbers } = require("../desafio-5");

test("filters even numbers from an array", () => {
	expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
	expect(filterEvenNumbers([7, 8, 9])).toEqual([8]);
});
