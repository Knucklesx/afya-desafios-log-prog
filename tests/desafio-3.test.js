const { addElementToEnd } = require("../desafio-3");

test("adds an element to the end of an array", () => {
	expect(addElementToEnd([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4, 5]);
	expect(addElementToEnd(["a", "b"], "c")).toEqual(["a", "b", "c"]);
});
