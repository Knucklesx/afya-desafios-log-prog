const { countOccurrences } = require("../desafio-8");

test("counts occurrences of a value in an array", () => {
	expect(countOccurrences([1, 2, 2, 3, 4, 2], 2)).toBe(3);
	expect(countOccurrences(["a", "b", "a", "c"], "a")).toBe(2);
});
