const { reverseArray } = require("../desafio-1");

test("inverts the elements of an array", () => {
	expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
	expect(reverseArray(["a", "b", "c"])).toEqual(["c", "b", "a"]);
});
