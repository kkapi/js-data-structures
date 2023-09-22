const array = [50, 25, -14, 2, 1, 94, 80, 51, 16, -28, -34, 18];
let count = 0;

/**
 * Bubble Sort
 * Time O(N^2)
 * @param {number[]} array
 * @return {number[]}
 */

function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - i; j++) {
			count += 1;

			if (array[j] > array[j + 1]) {
				let tmp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = tmp;
			}
		}
	}

	return array;
}

console.log('/bubble_sort/');
console.log(bubbleSort(array));
console.log('iteration count: ', count);
