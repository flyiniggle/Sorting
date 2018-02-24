function mergeSort(arr) {
	let len = arr.length;

	if(len <= 1) {
		return arr;
	}
	let middle = Math.ceil(len / 2);
	let first = arr.slice(0, middle);
	let second = arr.slice(middle, len);

	return merge(mergeSort(first), mergeSort(second));
}

function merge(first, second) {
	let result = [];

	while ((second.length) || (first.length)) {
		if (!first.length) {
			result = result.concat(second);
			break;
		} else if (!second.length) {
			result = result.concat(first);
			break;
		} else {
			let smaller = (first[0] < second[0]) ? first.shift() : second.shift();

			result.push(smaller);
		}
	}
	return result;
}

export default mergeSort;