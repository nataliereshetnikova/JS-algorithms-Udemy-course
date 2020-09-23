/*
 function called same which accepts two arrays.
 The function should return true if every value in the array
 has it's corresponding value squared in the second array.
 The frequency of values must be the same.
*/


//naive approach O(n^2) with nested loops
// function same(arr1, arr2) {
//   //if two strings are not the same length, return false
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//         //check if squared element is in the second array
//       let index = arr2.indexOf(arr1[i]**2);
//       //if it is there, remove it from second array or return false;
//       if(index===-1){
//         return false;        
//       } 
//       arr2.splice(index,1);
//   }
//   return true;
// }

//frequency Counter approach
function same(arr1, arr2) {
    if(arr1.length!=arr2.length){
        return false;
    }
    //objects to store elements and frequencies
    let arr1Frequency = {}, arr2Frequency = {};
    arr1.forEach(el => arr1Frequency[el] = (arr1Frequency[el]||0)+ 1);
    arr2.forEach(el => arr2Frequency[el] = (arr2Frequency[el]||0)+ 1);
    //check if frequency of second object is a squared frequency of first one
    for(let key in arr1Frequency){
        if(arr2Frequency[key]!==arr1Frequency[key**2]){
            return false;
        }
        if(!(key**2 in arr2Frequency)){
            return false;
        }
    }
    return true;
  }

console.log(same([1, 2, 3], [4, 1, 9])); //true
console.log(same([1, 2, 3], [1, 9])); //false
console.log(same([1, 2, 1], [4, 4, 1])); //false
console.log(same([], [])); //? true
console.log(same(["1", "2"], [2, 4])); //? false
