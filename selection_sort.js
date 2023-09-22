const array = [50, 25, -14, 2, 1, 94, 80, 51, 16, -28, -34, 18];
let count = 0;

/**
 * Selection Sort
 * Time O(N^2)
 * @param {number[]} array
 * @return {number[]}
 */

function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let indexMin = i;

		for (let j = i + 1; j < array.length; j++) {
			count += 1;

			if (array[j] < array[indexMin]) {
				indexMin = j;
			}
		}

		let tmp = array[i];
		array[i] = array[indexMin];
		array[indexMin] = tmp;
	}

	return array;
}

console.log('/selection_sort/');
console.log(selectionSort(array));
console.log('iteration count: ', count);
