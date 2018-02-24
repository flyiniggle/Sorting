import insertionSort from "./InsertionSort";

describe("#InsertionSort", function() {
	it("should sort good.", function() {
		let start = [5, 2, 8, 4, 1, 9, 7, 0, 3, 6];
		let result = insertionSort(start);

		expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});

	it("should sort good with negatives.", function() {
		let start = [5, -3, 2, 8, -1, 4, 1, 9, 7, 0, 3, -2, 6];
		let result = insertionSort(start);

		expect(result).toEqual([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});

	it("should sort good with duplicates.", function() {
		let start = [5, 2, 8, 4, 1, 9, 7, 5, 1, 0, 3, 6];
		let result = insertionSort(start);

		expect(result).toEqual([0, 1, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9]);
	});
});