const { removeDuplicates } = require("../desafio-9");

test("removes duplicate values from an array", () => {
	expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
	expect(removeDuplicates(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
});
