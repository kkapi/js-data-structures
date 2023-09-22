const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

function binarySearch(array, item) {
	let start = 0;
	let end = array.length - 1;
	let middle;
	let position = -1;

	while (start <= end) {
		count += 1;
		middle = Math.floor((start + end) / 2);

		if (array[middle] === item) {
			position = item;
			return position;
		}

		if (item < array[middle]) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
	}

	return position;
}

console.log('/binary_search/')
console.log('position: ', binarySearch(array, 5));
console.log('iteration count: ', count);
