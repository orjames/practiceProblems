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
