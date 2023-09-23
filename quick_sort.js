const array = [
	10, 25, -100, 0, 4, 3, 21, -15, 89, 91, 39, -48, -5, 10, 24, 0, 3, 25, 25,
	6, 12, 346, 146, 1, 2, 4,
];
let count = 0;

/**
 * QUick Sort
 * Time O(n*log(N))
 * @param {number[]} array
 * @return {number[]}
 */

function quickSort(array) {
	if (array.length <= 1) {
		return array;
	}

	let pivotIndex = Math.floor(array.length / 2);
	let pivot = array[pivotIndex];
	let less = [];
	let greater = [];

	for (let i = 0; i < array.length; i++) {
		count += 1;

		if (i === pivotIndex) {
			continue;
		}

		if (array[i] < pivot) {
			less.push(array[i]);
		} else {
			greater.push(array[i]);
		}
	}

	return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log('/quick_sort/');
console.log(quickSort(array));
console.log('iteration count: ', count);
