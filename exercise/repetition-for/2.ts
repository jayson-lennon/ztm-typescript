// Implement a sorting algorithm of your choosing to sort the provided array.
// Good introductory sorting algorithms are bubble sort and insertion sort.
//
// To confirm that your algorithm works properly, perform these steps:
// 1. Run your sorting algorithm on the `nums` array
// 2. Assert that the sorted array is [1, 2, 3, 4, 5]
//
import { strict as assert } from "assert";

const nums = [5, 4, 3, 2, 1];

function selectionSort(arr: number[]): number[] {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    // Find the minimum element in the unsorted part of the array
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the first element of the unsorted part
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

const sorted = selectionSort(nums);

assert.deepEqual(sorted, [1, 2, 3, 4, 5]);
