/*
Min Window Substring
Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr,
 which will contain only two strings, the first parameter being the string N 
 and the second parameter being a string K of some characters, and your goal 
 is to determine the smallest substring of N that contains all the characters in K.
  For example: if strArr is ["aaabaaddae", "aed"] then the smallest substring of N
   that contains the characters a, e, and d is "dae" located at the end of the string. 
   So for this example your program should return the string dae.

Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all of the characters in K is "aabd" which is located at the beginning of the string. Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N. Both strings will only contains lowercase alphabetic characters.
Examples
Input: ["ahffaksfajeeubsne", "jefaa"]
Output: aksfaje
Input: ["aaffhkksemckelloe", "fhea"]
Output: affhkkse
*/
function MinWindowSubstring(strArr) {
  //hash table to store number of characters in K
  let k = {};
  [...strArr[1]].forEach((char) =>
    k.hasOwnProperty(char) ? (k[char] += 1) : (k[char] = 1)
  );
  let numUnqieChars = Object.keys(k).length;
  //left and right pointers to iterate through through the N
  let left = 0;
  let right = numUnqieChars+1;
  //variable to track min window indices
  let minWindowInd = [];
  //variable to track min string length
  let minStringLength = strArr[0].length;
  //check until the end of N string minus number of unique chars in K
  let currentSearchString;
  while(right<=strArr[0].length && left<=strArr[0].length-numUnqieChars){
    currentSearchString = strArr[0].substring(left,right);
   // console.log("currentSearchString: "+currentSearchString);
    if(windowIsValid(currentSearchString, k)){
     // console.log("currentSearchString: "+currentSearchString + "minStringLength: " + minStringLength);
      if(currentSearchString.length<minStringLength){
        minStringLength=currentSearchString.length;
        minWindowInd[0]=left;
        minWindowInd[1]=right;
      }
      left++;
    } else{
      right++;
    }
  }
  strArr = strArr[0].substring(minWindowInd[0], minWindowInd[1]);
  return strArr;
}

function windowIsValid(str, k){
  //hash table to keep track of chars found in substring
  let n = {};
    [...str].forEach((char) => {
      if (k.hasOwnProperty(char)) {
        n.hasOwnProperty(char) ? (n[char] += 1) : (n[char] = 1);
      }
    });
    //check if the hash tables matches
    if (Object.keys(n).length !== Object.keys(k).length) {
      return false;
    }
    for(let key of Object.keys(n)){
      if(n[key]<k[key]){
        return false;
      }
    }
    return true;
}


// keep this function call here
// console.log(MinWindowSubstring(readline()));
console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"]));//aksfaje
console.log(MinWindowSubstring(["aaffhkksemckelloe", "fhea"]));//affhkkse
console.log(MinWindowSubstring(["aaabaaddae", "aed"]));//dae
console.log(MinWindowSubstring(["aaffsfsfasfasfasfasfasfacasfafe", "fafe"]));//fafe
console.log(MinWindowSubstring(["cccaabbbbrr", "rbac"]));//caabbbbr