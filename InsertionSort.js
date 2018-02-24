function insertionSort(arr) {
	const result = arr.slice(0, 1);
	let i = 1

	while(i < arr.length) {
		let j = result.length - 1;
		let current = arr[i];

		while(j >= 0) {
			if(result[j] < current) {
				result.splice((j + 1), 0, current);
				break;
			} else if(j === 0) {
				result.unshift(current);
				break;
			} else {
				j--;
			}
		}
		i++;
	}
	return result;
}

export default insertionSort;