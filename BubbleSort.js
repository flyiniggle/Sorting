function bubbleSort(arr) {

	for(let i = (arr.length - 2); i >=0; i--) {
		let j = i;

		while(j < arr.length - 1) {
			if(arr[j] > arr[j + 1]) {
				let temp = arr[j];

				arr.splice(j, 1);
				arr.splice(++j, 0, temp);
			} else {
				break;
			}
		}
	}

	return arr;
}

export default bubbleSort;