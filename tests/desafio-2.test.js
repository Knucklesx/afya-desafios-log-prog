const { removeLastElement } = require("../desafio-2");

test("removes the last element of an array", () => {
	expect(removeLastElement([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4]);
	expect(removeLastElement(["a", "b", "c"])).toEqual(["a", "b"]);
});
