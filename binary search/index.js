//Binary search works for sorted collections
//element in the center is compared to the searched value
//and then search continues the same way within right section of the array
let nums = [2, 7, 9, 15, 456, 700, 100];
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}
console.log(binarySearch(nums, 700)); //5
console.log(binarySearch([], 5)); //false
console.log(binarySearch(nums, 176)); //false

/*Time complexity
O(log(n)), space complexity O(1);
*/

//Recursive implementation
function recursiveBinarySearch(arr, target) {
  return binarySearchHelper(arr, target, 0, arr.length - 1);
}
function binarySearchHelper(arr, target, left, right) {
  if (left > right) return false;
  let mid = Math.floor((right + left) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid-1);
  } else {
    return binarySearch(arr, target, mid + 1, right);
  }
}
console.log(recursiveBinarySearch(nums, 700));
console.log(recursiveBinarySearch([], 5)); //false
console.log(recursiveBinarySearch(nums, 176)); //false

/*Time complexity
O(log(n)), space complexity O(log(n));
*/