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
  be accessible.
  This is because of closures, which are a combination of a function and the lexical environment that the
  function was declared. The environment consists of any local variables that were in-scope at the time the closure
  was created.
  myFunc() is a reference to the instance of the function displayName created when makeFunc is run. The instance of
  displayName maintains a reference to its lexical environment, within which the name exists. For this reason,
  when myFunc() is invoked, the variable name remains available for use and "owen" is passed to alert.
  */

// TLDR: a closure is a combination of a function and its lexical environment. For example if I did the following

function outerFunc() {
  let name = 'brutus';
  function displayBrutus() {
    console.log(name);
  }
  return displayBrutus;
}
let testFunc = outerFunc();
testFunc();

/* you would expect this not to work, but it does in JavaScript. This is because testFunc is a reference to the instance of the
function displayBrutus() created when testFunc() is run. The instance of displayBrutus() keeps the reference to the lexical environment.
In that environment, the variable name exists.
*/

// another example
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}
let add5 = makeAdder(5);
let add10 = makeAdder(10);
console.log(add5(2)); //7
console.log(add10(2)); //12

/* in this example, add5 and add10 are both closures. makeAdder is a function factory taking a single argument x and returning a
new function. The function it returns takes a single argument y and returns the sum of x + y.
add5 and add10 are both closures. add5 has the lexical enviornment where x is = 5 and add10 has lexical environment where x = 10.
*/

/* how are CLOSURES used practically?

closures are useful because they let you associate some data (through the lexical environment) with a function that operates on
that data. This has parallels to object oriented programming. Objects allow us to associate some data, with one or more methods.

say we want to add buttons to a webpage to adjust the font size, one way to do this is to specify the font-size of the body,
then set the size of other elements on the page using the relative unit em.*/

// body {
//   font-size: 12px;
// }

// h1 {
//   font-size: 1.5em;
// }

// h2 {
//   font-size: 1.2em;
// }

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}
let size12 = makeSizer(12);
let size14 = makeSizer(14);
let size16 = makeSizer(16);
// then we can do the following:
document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
// with the following html
// <a href="#" id="size-12">12</a>
// <a href="#" id="size-14">14</a>
// <a href="#" id="size-16">16</a>

// CLOSURE SCOPE CHAIN
// for every closure we have three scopes:
// local scope (own scope)
// outer functions scope
// global scope

// consider the following example:
// global scope
var e = 10;
function sum(a) {
  return function(b) {
    return function(c) {
      //outer functions scope
      return function(d) {
        //local scope
        return a + b + c + d + e;
      };
    };
  };
}
console.log(sum(1)(2)(3)(4)); // 20

// What are scopes in javascript?

/* scope is the context of execution. The context of which values and expressions are "visible" or can be referenced. If a 
variable or other expression is not "in the current scope" then it is unavailable for use. Scopes can be labeled in 
hierarchy so a child scope can have access to a parent scope but not the other way around. A function serves as a closure
in JavaScript thus creates a scope.*/

function exampleFunction() {
  var x = 'declared inside function'; // can only be used within the function
  console.log('inside the function');
  console.log(x);
}
console.log(x); //causes error, x is out of scope

// What is asynchronous programming within javascript (callbacks and promises)?
/* JavaScript is asynchronous by default and is single threaded. This means it can't create other threads to run in parallel.
lines of code are executed in series, one after another.

CALLBACKS
a callback is a simple function that is passed as the value to another function, and will only be executed when the event happens
JS has first0class functions which can be assigned to variables and passed around to other functions (high-order functions).
*/
window.addEventListener('load', () => {
  //window loaded
  //do what you want
});
// this is an event listener to a page load with an anonymous callback function
// callbacks are functions that are passed as a value to another function, and will only happen once that event happens.
setTimeout(() => {
  // runs after 2 seconds
}, 2000);

// errors are handled in callbacks with the error object in Node.js.
fs.readFile('/file.json', (err, data) => {
  if (err !== null) {
    //handle error
    console.log(err);
    return;
  }
  //no errors, process data
  console.log(data);
});

// however, callbacks add a level of nesting, with a lot of callbacks, code can get complicated fast
window.addEventListener('load', () => {
  document.getElementById('button').addEventListener('click', () => {
    setTimeout(() => {
      items.forEach((item) => {
        //your code here
      });
    }, 2000);
  });
});
// this brings us to promises
//PROMISES
// a promise is commonly defined as a proxy for a value that will eventually become available.
/* promises allow for asynchronous code without writing too many callbacks, Async functions use promises
as their building block
How promises work:
once a promise has been called it will start in pending state. This means the called function continues execution, 
while it waits for the promise to do its own processing, and give the caller function some feedback. At this point
the caller function waits for it ot either return the promise in a resolved state or in a rejected state, but the
function continues its execution while the promise does its work. The fetch API uses promises
*/
// promise constructor
let done = true;
const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built';
    resolve(workDone);
  } else {
    const why = 'Still working on something else';
    reject(why);
  }
});

// consuming the promise
const checkIfItsDone = () => {
  isItDoneYet
    .then((ok) => {
      console.log(ok);
    })
    .catch((err) => {
      console.error(err);
    });
};

// example of chaining promise, using fetch is the same thing as defining a promise using new Promise()
const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
};

const json = (response) => response.json();

fetch('/todos.json')
  .then(status)
  .then(json)
  .then((data) => {
    console.log('Request succeeded with JSON response', data);
  })
  .catch((error) => {
    console.log('Request failed', error);
  });

/* in this example we call fetch() to get a list of TODO items from the todos.json file found in the domain root,
and we create a chain of promises. Running fetch() returns a response which has many properties and within those we
reference status - a numeric value representing the HTTP status code, and statusText - a status message which is ok if the
request succeeded
response also has a json method which returns a promise that will resolve with the content of the body processed and transformed into JSON

given these premises, this is what happens: the first promise in the chain is a function that we defined, called status(), that
checks the response status and if it's not a success response (200-299) it rejects the promise.
This operation will cause the promise chain to skip all the chained promises and will skip directly to the catch() statement at the
bottom, logging the Request failed text along with the error message.
If that succeeds instead, it calls the json() function we defined. Since the previous promise, when successful, returned the response
object, we get it as an input into the second promise. In this case, we return the data JSON processed so the third promise receives
the JSON directly
*/

// What is a component within react?

/* components are the building blocks of react. A component is a JS class or function that optionally accepts inputs (props) and
returns a React element that describes how a section of the UI should appear.
Components split the UI into independent, modular, reusable pieces. Can either be a class or function based component.
*/

// What does this statement mean to you “everything in react is a component”?

// it means that React is like building with pieces of lego and each lego piece is a component that is either a class or a function
// that describes how a portion of the UI should appear. These components can accept props.
