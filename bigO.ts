let test = [0, 1, 2, 3, 4, 5];
let randomTest: number[] = [2, 3, 6, 10, 11];

//1-----------------------------------------------------------------------
const foo = (array: number[]) => {
  let sum: number = 0;
  let product: number = 1;
  for (let i: number = 0; i < array.length; i++) {
    sum += array[i];
  }
  for (let i: number = 0; i < array.length; i++) {
    product *= array[i];
  }
};
// do this and then when you're done, do that
// This is O(N) time complexity, it will take O(N) time, the fact that we iterate through it twice doesn't matter

//2------------------------------------------------------------------------
const printPairs = (array: number[]) => {
  for (let i: number = 0; i < array.length; i++) {
    for (let j: number = 0; j < array.length; j++) {
      console.log(array[i] + ', ' + array[j]);
    }
  }
};
//  console.log(printPairs(array))
// do this for each time you do that, ie do the inner loop completely for each time you do the outer loop, so you multiply run times O(N) * O(N) therfore it is O(N^2) complexity

//3------------------------------------------------------------------------
const printUnrderedPairs = (arry: number[]) => {
  for (let i: number = 0; i < arry.length; i++) {
    for (let j: number = i + 1; j < arry.length; j++) {
      console.log(arry[i], arry[j]);
    }
  }
};
// do this for each time you do that, but the thing you're doing is less and less in length each time. The inner for loop with j is dependent on the variable i which is defined in the outer loop. This means you are doing the inner loop less and less each time you do one loop of i.
// The first time j runs for N-1 steps, the second time it runs though N-2 steps, then N-3, and so on...
// number of steps is (N-1) + (N-2) + (N-3) + ... + 2 + 1
// which = 1 + 2 + 3 + ... + (N-1)
// which = sum of 1 through (N-1)
// sum of 1 through N-1 = (N(N-1))/2
// ignore the constant of dividing by 2 or multiplying by 0.5
// Runtime will be O(N^2)
// Alternatively can look at this as what the code means:
// it iterates through the pairs i and j where j > i. There are N^2 total pairs, but only half of those are reached because j > i.
// this means the matrix (i, j): which is complexity O(N^2)
// (0, 1) (0, 2) (0, 3) (0, 4) (0, 5)
// (1, 1) (1, 2) (1, 3) (1, 4) (1, 5)
// (2, 1) (2, 2) (2, 3) (2, 4) (2, 5)
// (3, 1) (3, 2) (3, 3) (3, 4) (3, 5)
// (4, 1) (4, 2) (4, 3) (4, 4) (4, 5)
// (5, 1) (5, 2) (5, 3) (5, 4) (5, 5)
// would only have the values where j > i:
// (0, 1) (0, 2) (0, 3) (0, 4) (0, 5)
//        (1, 2) (1, 3) (1, 4) (1, 5)
//               (2, 3) (2, 4) (2, 5)
//                      (3, 4) (3, 5)
//                             (4, 5)
// which looks like half the N * N matrix, roughly N^2/2 therefore it takes O(n^2) time
// For average work, the outer loop runs N times. But what about the inner loop. Say N = 10, the inner loop would run 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 times. The average of that is 5 or N/2. So the work would be innerloop * outerloop => N/2 * N = (N^2)/2 or O(N^2)

//4-------------------------------------------------------------------------
const printUnorderedPairs4 = (arrayA: number[], arrayB: number[]) => {
  for (let i: number = 0; i < arrayA.length; i++) {
    for (let j: number = 0; j < arrayB.length; j++) {
      if (arrayA[i] < arrayB[j]) {
        console.log(arrayA[i] + ',' + arrayB[j]);
      }
    }
  }
};
// do this for every time you do that
// the inner loop if statement is O(1) time since its a sequence of constant time events, we can refactor our function:
const printUnorderedPairs4a = (arrayA: number[], arrayB: number[]) => {
  for (let i: number = 0; i < arrayA.length; i++) {
    for (let j: number = 0; j < arrayB.length; j++) {
      /* O(1) work */
    }
  }
};
// So now we can say the for each element in arrayA, the inner loop goes through b iterations, where b = arrayB.length. If a = arrayA.length then the runtime is O(a*b). THIS IS NOT O(n^2) complexity because there are different inputs, both matter. This is an extremely common mistake. They depend on different inputs, arrayA and arrayB so it is O(a*b) complexity.

//5-------------------------------------------------------------------------
const prntUnorderedPairs5 = (arrayA: number[], arrayB: number[]) => {
  for (let i: number = 0; i < arrayA.length; i++) {
    for (let j: number = 0; j < arrayB.length; j++) {
      for (let k: number = 0; k < 100000; k++) {
        console.log(arrayA[i] + ', ' + arrayB[j]);
      }
    }
  }
};
// Innermost loop happens a set number of times, 100,000 tmes which is a constant time. So we can rewrite this as:
const prntUnorderedPairs5a = (arrayA: number[], arrayB: number[]) => {
  for (let i: number = 0; i < arrayA.length; i++) {
    for (let j: number = 0; j < arrayB.length; j++) {
      /* O(100,000) work */
    }
  }
};
// so outermost loop is runs arrayA.length times, call it a times. second loop runs arrayB.length times, call it b times. Innermost loop runs 100,000 times. So its O(a*b*10000) which is just O(a*b)

//6-------------------------------------------------------------------------
const reverse2 = (array: number[]) => {
  for (let i = 0; i < array.length / 2; i++) {
    let oppositeIndex = array.length - i - 1;
    let temp = array[i];
    array[i] = array[oppositeIndex];
    array[oppositeIndex] = temp;
  }
  console.log(array);
};
// this reverses an array
// this only goes through the array half of the times so it takes N/2 times to run but this is still O(N) time, the half does not impact big O time.

//7-------------------------------------------------------------------------
// which of the following are equivalent to O(N)? Why?
'O(N + P), where P < N/2';
// this is equivalent because it is essentially N + N/2 which is N + N which can just be O(N), dropping the non dominant terms which is O(P)
'O(2N)';
// this is equivalent to O(N) because you drop the constants
'O(N + logN)';
// this is equivalent to O(N) because you drop non dominant terms
'O(N + M)';
// there is no established relationship between N and M therefore we can't drop either, therefore the algorithm is of O(N + M) complexity

//8-------------------------------------------------------------------------
'suppose we had an algorithm that took an array of strings, sorted each string, then sorted the full array. What would the runtime be?';
// you would have to do this for every time you do that (nested for loops)
// many candidates get this WRONG. They say sorting each string is O(N log N), and you do this for each string so that's O(N*N log N), also have to sort the array so that's an additional O(N log N). Therefore it is (N^2 log N + N log N) which is just O(N^2 log N). This is SO WRONG. This uses N interchangeable as the length of the string and as the length of the array. This is why one should always always name the varaibles semantically.

// lets rinse that off and define new varaibles
'let s be the length of the longeset string';
'let a be the length of the array';
// now lets work through it in parts
// sorting through one string is O(s * log s)
// now we have to do this for every string, and there are (a) total strings.
// therefore sorting strings is O(a*s log s)
// right now most candidates would make a huge mistake of saying that sorting the array takes O(a log a) time. BUT you also need to compare the strings - so that means each comparison takes O(s) time, so there are O(a log a) comparisons that take O(s) time each. This means it will take O(a*s log a) time to complete the sorting of the sorted strings. In total it will take: O(a*s log a) + O(a*s log s) = O(a*s(log a + log s)) time

//9-------------------------------------------------------------------------
// sums up all the values of the nodes in a blanaced binary search tree, what is the runtime?
const binarySum = (node: any): any => {
  if (node === null) {
    return 0;
  }
  return binarySum(node.left) + node.value + binarySum(node.right);
};
// can think about this the most straightforward way, this code touches each node once and does a constant time amount of work with each "touch" (excluding the recursive calls). So runtime would be linear with respect to the number of nodes in the tree, if there are N nodes, the runtime will be O(N)

// we also said that runtime for recursive calls is typically O(branches^depth), since there are two branches or recursive calls at each call - we are looking at O(2^depth).
// this doesn't look right! there is an exponent there.
// what is the depth? the tree is a blanced binary search tree. Therefore, there are N total nodes, the depth is roughly log N
// by the O(2^depth) equation we get O(2^logN)
// definition of log 2^p = Q -> log2(Q) = P
// 2logN = N
// threfore complexity is O(N) complexity where N is the number of Nodes.

//10-------------------------------------------------------------------------
// the following checks if a number is prime by checking the divisability on numbers less than it. Only needs to go up to the square root of n because if n is divisible by a number greater than its square root then it is divisible by something smaller than it
// for examples while 33 is divided by 11 (which is greater than sqrt(33)) the counterpart to 11 is 3 (3*11===33). 33 will have already been eliminated as a prime number by 3
// what is the time complexity of this function:
const isPrime = (n: number): boolean => {
  for (let x: number = 2; x * x <= n; x++) {
    if (n % x === 0) {
      return false;
    }
  }
  return true;
};
// the work inside the loop is constant O(1), therefore we just care about how many iterations the loop must go through in worst case. The for loop will start when x = 2 and end when x * x >= n, or stops when x = sqrt(n).
// the loop is really something like this
const isPrime2 = (n: number): boolean => {
  for (let x: number = 2; x <= Math.sqrt(n); x++) {
    if (n % x === 0) {
      return false;
    }
  }
  return true;
};
// complexity is sqrt(N) or N^(1/2)

//11-------------------------------------------------------------------------
// the following code computes n! what is the time complexity?
const factorial = (n: number): number => {
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
// the first two statements are constant time O(1), it calls itself recursively once. since its not a recursive function with multiple branches we cant say it follows O(branches^depth) model.
// Think about it it will recurse from n to (n-1) to (n-2) down to 1. Therefore it will take O(n) time.

//12-------------------------------------------------------------------------
// this prints all perumations of a string with all distinct characters
let permutation = (str: string): void => {
  permutations(str, '');
};
const permutations = (str: string, prefix: string): void => {
  if (str.length === 0) {
    console.log(prefix); // takes O(N) time since each line needs to log
  } else {
    for (let i = 0; i < str.length; i++) {
      // lines below will take O(N) time combined, due to string concat
      // notice that lengths of rem, prefix, and str.charAt(i) will always be n
      let rem = str.substring(0, i) + str.substring(i + 1);
      permutations(rem, prefix + str.charAt(i));
    }
  }
};
// each node in the call tree then corresponds to O(n) work, but how many times does this function get called?
// picture a call tree representing our function for a string like 'abcd'
//                  ___________root
//                 |
//      ___________a____________      just showing one branch (a)
//     |           |            |
//    _ab_        _ac_         _ad_
// abc   abd    acb   acd     adb  adc
//  |     |      |     |       |    |
// abcd  abdc   acbd  acdb    adbc adcb
