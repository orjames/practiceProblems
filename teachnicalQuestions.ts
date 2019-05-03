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
