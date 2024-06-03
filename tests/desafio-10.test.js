const { groupBy } = require("../desafio-10");

test("groups array elements by a specified key", () => {
	const data = [
		{ name: "Alice", age: 25 },
		{ name: "Bob", age: 25 },
		{ name: "Charlie", age: 30 },
	];
	const result = {
		25: [
			{ name: "Alice", age: 25 },
			{ name: "Bob", age: 25 },
		],
		30: [{ name: "Charlie", age: 30 }],
	};
	expect(groupBy(data, "age")).toEqual(result);
});
