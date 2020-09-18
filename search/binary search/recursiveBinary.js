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