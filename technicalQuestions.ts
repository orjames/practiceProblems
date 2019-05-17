const hasUniqueChars = (str) => {
  let ans = 0;
  let arr = str.split('');
  arr.sort();
  console.log(arr);
  arr.map((char, index) => {
    if (char === arr[index + 1]) {
      ans = 1;
    }
  });
  if (ans === 1) {
    return false;
  } else {
    return true;
  }
};

// check if string is all unique characters
const isUniqueChars = (str) => {
  console.log(str);
  if (str.length > 128) {
    return false;
  }
  let charBoolArr = Array(128).fill(false);

  for (let i = 0; i < str.length; i++) {
    let charVal = str.charCodeAt(i);
    console.log(charVal);
    console.log(charBoolArr[charVal]);
    if (charBoolArr[charVal] === true) {
      return false;
    }
    charBoolArr[charVal] = true;
  }
  return true;
};

// check if two strings are permutations of eachother
const permutations = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  return (
    str1
      .split('')
      .sort()
      .join('') ===
    str2
      .split('')
      .sort()
      .join('')
  );
};

// given a string, check if it is a permutation of a palindrome ignore casing and non-letter characters
const isPermutationOfPalendrome = (phrase) => {
  let countOdd = 0;
  let z = 'z';
  let a = 'a';
  let table = Array(128).fill(0);
  console.log(table);
  for (let c of phrase.split('')) {
    let x = c.charCodeAt(0);
    if (x !== -1) {
      table[x]++;
      if (table[x] % 2 === 1) {
        countOdd++;
      } else {
        countOdd--;
      }
    }
  }
  return countOdd <= 1;
};

//There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.
// EXAMPLE pale, ple -> true pales, pale -> true pale, bale -> true pale, bake -> false

const OneAway = (str1: string, str2: string): boolean => {
  // if the strings are not one character apart or equal
  if (Math.abs(str1.length - str2.length) > 0) {
    return false;
  }
  // set the shorter and longer string
  let shorter = str1 < str2 ? str1 : str2;
  let longer = str1 < str2 ? str2 : str1;

  // starting the indexes for iterating through each string
  let index1: number = 0;
  let index2: number = 0;
  let foundDifference: boolean = false;
  while (index1 < shorter.length && index2 < longer.length) {
    // if the characters don't match
    if (shorter.charAt(index1) !== longer.charAt(index2)) {
      // make sure this is the first difference
      if (foundDifference) {
        return false;
      }
      // first difference, flag it
      foundDifference = true;
      // if we are in replace case
      if (shorter.length === longer.length) {
        // increment the "shorter" string once to skip over the replaceable character
        index1++;
      }
    } else {
      index1++; // if the characters do match, move shorter string index
    }
    index2++; //always increment index2
  }
  return true;
};

// implement a method to perfomr basic string stringCompression using counts of repeated characters. for exapmple the string aabcccccaaa would beecome a2b1c5a3. if the compressed string would not be smaller than the original string, return the orignal string. assume the string has only uppercase and lowercase letters (a-z)
const stringCompression = (str: string): string => {
  // do data validation
  let answer: string[] = [];
  for (let i: number = 0; i < str.length; i++) {
    let char = str.charAt(i);
    let count = 1;
    while (str.charAt(i + 1) === char && i < str.length) {
      count++;
      i++;
    }
    answer.push(char);
    answer.push(count.toString());
  }
  if (answer.join('').length < str.length) {
    return answer.join('');
  } else {
    return str;
  }
};

stringCompression('aaabbc');

// given an image represented by NxN matrix, where each pixel in the image is represented by an intger, write a mehtod to rotate the image by 90 degrees. Can you do this in place?
const rotate = (matrix) => {
  // if there is empty matrix passed
  /* or if there is a matrix that isn't square, ie length of one inner array
  is different that the outer array*/
  if (matrix.length === 0 || matrix[0].length !== matrix.length) {
    return false;
  }
  console.log('starting matrix\n', matrix);
  let n = matrix.length;
  // for loop for the layers, in a 4x4 matrix should be two layers, 3x3 should be 1 layer, NxN should be n/2 or less layers
  for (let layer = 0; layer < n / 2; layer++) {
    // first is the first index in the layer
    let first = layer; //first iteration 0, then 1
    let last = n - 1 - layer; //first iteration 3, then 2

    // inner for loop to iterate through the individual portion of the array that's being changed
    for (let i = first; i < last; i++) {
      let offset = i - first;
      let temp = matrix[first][i];
      // let temp = matrix[0][0]
      // let temp = matrix[0][1]

      // reassign the top[i] as left[0]
      matrix[first][i] = matrix[last - offset][first];
      // matrix[0][0] = matrix[3][0]
      // matrix[0][1] = matrix[2][0]

      // reassign left[0] as bottom[last-i]
      matrix[last - offset][first] = matrix[last][last - offset];
      // matrix[3][0] = matrix[3][3]
      // matrix[2][0] = matrix[3][2]

      // reassign bottom[last-1] as right[last]
      matrix[last][last - offset] = matrix[i][last];
      // matrix[3][3] = matrix [0][3]
      // matrix[3][2] = matrix [1][3]

      // reassign right[last] as top[i]
      matrix[i][last] = temp;
      // matrix[0][3] = temp
      // matrix[1][3] = temp
    }
    console.log(`finished inner for loop ${layer} time\n`, matrix);
  }
  console.log('final matrix \n', matrix);
  return true;
};
rotate([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]]);

// ZERO MATRIX:
// write an algorithm such that if an element in an MxN matrix is 0, ts entire row and column are set to zero
const zeroMatrix = (matrix: number[][]) => {
  let colZeros: number[] = [];
  let rowZeros: number[] = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        colZeros.push(col);
        rowZeros.push(row);
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    if (rowZeros.includes(row)) {
      matrix[row].fill(0);
      row++;
    }
    for (let col = 0; col < matrix[row].length; col++) {
      if (colZeros.includes(col)) {
        matrix[row][col] = 0;
      }
    }
  }
  console.log(matrix);
  return matrix;
};

zeroMatrix([[1, 1, 1, 1], [1, 1, 0, 1], [1, 1, 1, 1]]);

// assume you hav ea method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring eg "waterbottle" is a rotation of "erbottlewat"
const isRotation = (s1, s2) => {
  if (s1.length !== s1.length && s1.length > 0) {
    return false;
  } else {
    return; // isSubstring(s1 + s1, s2);
  }
};

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target) {
  let numsObject = new Object();
  for (let i = 0; i < nums.length; i++) {
    numsObject[nums[i]] = i;
  }
  for (let j = 0; j < nums.length; j++) {
    let temp = nums[j];
    let needed = target - temp;
    if (needed in numsObject && j !== numsObject[needed]) {
      return [j, numsObject[needed]];
    }
  }
  return undefined;
};
twoSum([2, 7, 11, 15], 9);

// What is a closure in javascript?
// prettier-ignore
// a closure is the combination of a function and the lexical environment within which the function was declared
// LEXICAL SCOPING
// consider the following:
function init() {
    let name = 'owen'; // name is a local variable created by init
    function displayName() {
      //displayName() is the inner function, a closure
      alert(name); // using variable declared in parent function
    }
    displayName();
  }
init();
/* init creates a local variable called name and a function called displayName(). The displayName
      function is an inner function that is defined inside init() and is only available within the body
      of the init() function. The displayName() function has no local variables of its own. However, since
      inner functions have access to the variables of outer functions, displayName() can access the variable
      name declared in the parent function.
      */
// CLOSURE
// consider the following:
function makeFunc() {
  let name = 'owen';
  function displayName() {
    alert(name);
  }
  return displayName;
}
let myFunc = makeFunc();
myFunc();
/* running this code has the exact same effect as the previous example of the init() function above
      what's different is that the inner function, displayName() is returned from the outer function
      before being executed. 
      Might seem like the code wouldn't work. In some languages the local variables exist only the duration of that
      functions execution. Once makeFunc() has finished executing, you might expect the name variable would no longer
      be accessible
      */

// What are scopes in javascript?

// What is asynchronous programming within javascript (callbacks and promises)?

// What is a component within react?

// What does this statement mean to you “everything in react is a component”?
