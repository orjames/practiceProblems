let test = [0, 1, 2, 3, 4, 5];
let randomTest: number[] = [2, 3, 6, 10, 11];

// prettier-ignore
{

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
// the first two statements are constant time O(1), it calls itself recursively once. since its not a recursive funciton with multiple branches we cant say it follows O(branches^depth) model.
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
// How many leaf nodes are there? (nodes with no children) we branch four times at the root (a, b, c, d) then three times, then twice, then once. This is expressed as 4*3*2*1 or 4! or n! permutations
// how many total nodes are there, each leaf node is attached to a path with n nodes in this example each leaf has 4, which is n, levels above it. So at most there are n * n! total nodes in the tree.
// so the runtime is - since it's doing O(N) work, there are N! left nodes, therefore n*n! total nodes it is total nodes * work => O(n*n*n!) which is expressed as O((N+2)!) [not the same as O(N!)]

//13-------------------------------------------------------------------------
// the following computes the Nth Fibonacci number
const fib = (n: number): number => {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};
// O(branches^depth) for recursive function, looks like branches is 2 and depth is n. Thinking about it, the function does work O(1) for the if and else if statements. The function must go through the equation a total of n-1 times. this would mean O(2^n-1) or just O(2^n). Explanation: two branches per call, and we go as deep as N, therefore runtimes is O(2^n)
// generally when you see an algorithm with muliple recursive calls, you're looking at exponential runtime

//14-------------------------------------------------------------------------
// the following prints all Fibonacci numbers from 0 to n. What is the time complexity?
const fibo = (n: number): number => {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

const allFib = (n: number): void => {
  for (let i = 0; i < n; i++) {
    console.log(i + ': ' + fibo(i));
  }
};
// starting with allFib, the function does O(N) work, because it does the log once for each value, but also it calls fibo() each time. fibo itself is a recursive function O(branches^depth) and there are two branches and the deps is from n to 0 so n, so fibo is O(2^n) and allFib is O(n) so its O(n*2^n). WRONG. This is because while the outside function is O(N) time complexity, n is decreasing each subsequent call.
// lets walk through it
// fib(1) -> 2^1 steps
// fib(2) -> 2^2 steps
// fib(3) -> 2^3 steps
// fib(4) -> 2^4 steps
// so total work is 2^1, 2^2, 2^3, 2^4, 2^5 ... 2^n
// this simplifies to 2^(n+1) - 2 work so the algorithm is then still O(2^n)

//15-------------------------------------------------------------------------
// the following prints all Fibonacci numbers from 0 to n. This time, it stores previously computed values in an integer array. If it has already been computed, it just returns the cache. What is the runtime?
const fibon = (n: number, memo: number[]) => {
  if (n <= 0) {
    return 0;
  } else if (n <= 1) {
    return 1;
  } else if (memo[n] > 0) {
    return memo[n];
  }
  memo[n] = fibon(n - 1, memo) + fibon(n - 2, memo);
  return memo[n];
};

const allFib2 = (n: number): void => {
  let memo: number[] = [n + 1];
  for (let i = 0; i < n; i++) {
    console.log(i + ': ' + fibon(i, memo));
  }
};

// walk through what the algorithm does:
// fibon(0) -> since n<=0, return 0
// fibon(1) -> since n<=1, return 1
// fibon(2) -> memo[2] = fibon(1) + fibon(0)
// fibon(1) -> since n<=1, return 1
// fibon(0) -> since n<=1, return 0
// store 1 at memo[2]
// fibon(3) -> memo[3] = fibon(2) + fibon(1)
// fibon(2) -> lookup memo[2], return 1
// fibon(1) -> return 1;
// store 2 at memo[3]
// fibon(4) -> memo[4] = fibon(3) + fibon(2)
// fibon(3) -> lookup memo[3], return 2
// fibon(2) -> lookup memo[2], return 1
// store 3 at memo[4]
// fibon(5) -> memo[5] = fibon[4] + fibon[3]
// fibon(4) -> lookup memo[4], return 3
// fibon(3) -> lookup memo[3], return 2
// store 5 at memo[5]

// at each call to fibon(i) we have already computed the storeed values for fibon(i-1) & fibon(i-2), we just have to look these up, store the new result and return. This takes a constant amount of time. We do a constant amount of work a constant amount of time so this is O(n) time. This technique, called memorization is a very common one to optimize exponenetial time recursive algorithms
//16-------------------------------------------------------------------------
// the following function prints the powers of 2 from 1 through n (inclusive). For example, if n is 4, it would print 1, 2, and 4. What is the runtime?
const powersOf2 = (n: number) => {
  if (n < 1) {
    return 0;
  } else if (n === 1) {
    console.log(1)
    return 1;
  } else {
    let prev: number = powersOf2(Math.floor(n / 2));
    let curr: number = prev * 2;
    console.log(curr)
    return curr
  }
}
// go through algorithm step by step. Lets do powersOf2(50)
// powersOf2(50) -> prev = powersOf2(25)
  // powersOf2(25) -> prev = powersOf2(12)
    // powersOf2(12) -> prev = powersOf2(6)
      // powersOf2(6) -> prev = powersOf2(3)
        // powersOf2(3) -> prev = powersOf2(1)
          // powersOf2(1) 
            // print and return 1
          // print and return 2
        // print and return 4
      // print and return 8
    // print and return 16
  // print and return 32  

// the runtime then is the number of times we can divide 50 (or n) by 2 until we get down to the best case, this is O(log(n))

// We can also think about this as what the code is supposed to be doing:
  // each call to powersOf2 results in exacly one number being printed and returned (excluding recursive calls), so if the algorithm prints 13 values, then powersOf2 was called 13 times.
  // in this case, we are told taht it prints all the pwers of 2 between 1 and n. Therefore the number of times the funciton si called, which is its runtime, must equal the number of powers of 2 between 1 and n. There are log N powers between 1 and n, therefore, runtime is O(log(n)

// final way to approach runtime is to think about how runtime changes as n gets bigger. After all, this is exactly what big O time means.
  // if N fors from P to P+1, the number of calls to powersOf2 might not change at all. When will the number of calls to powersOf2 increase? each time n doubles is when it'll increase by 1.
  // so each time n doubles the number of calls to powersOf2 increases by 1. therefore, the number of powersOf2 is the number of times you can double 1 until you get to n. it is x in equation 2^x = n
    // what is x? x is log n. This is exactly what is meany by x = log n
    // runtime is then O(log(n))

// Practice Problems ------------------------------------------------------------------------------------
// 1-----------------------------------------------------------------------------------------------------
// computes the product of a and b
const product = (a: number, b: number): number => {
  let sum: number = 0
  for (let i=0; i < b; i++) {
    sum += a
  }
  return sum
}
// linear runtime of O(b) because it steps through from 0 to b. The work done withint the for loop is O(1) - constant


// 2-----------------------------------------------------------------------------------------------------
// the following computes a^b, what is the runtime?
const power = (a: number, b: number): number => {
  if (b < 0) {
    return 0; // error
  } else if (b === 0) {
    return 1
  } else {
    return a * power(a, b - 1)
  }
}
// ignoring the recursion, constant runtime O(1). With the recursion. Think about what the algorithm is doing: a remains constant, b is going down by 1 each time. So the algorithm has O(b) runtime.
// step by step:
// input: power(2, 6) or 2^6:
//
// power(2, 6) -> return 2 * power(2, 5)
  // power(2, 5) -> return 2 * power(2, 4)
    // power(2, 4) -> return 2 * power(2, 3)
      // power(2, 3) -> return 2 * power(2, 2)
        // power(2, 2) -> return 2 * power(2, 1)
          // power(2, 1) -> return 2 * power(2, 0)
            // power(2, 0) -> return 1
          // return 2
        // return 4
      // return 8
    // return 16
  // return 32
// return 64
// n = 6 and function is called 6 times, this is O(b) runtime

// 3-----------------------------------------------------------------------------------------------------
// the following computes a % b, what is the runtime?

const mod = (a: number, b: number): number => {
  if (b <= 0) {
    return -1;
  }
 let div: number = Math.floor(a / b)
 return (a - div * b)
}
// if statement = O(1), next line O(1) next line is O(1) so constant O(1) runtime

// 4-----------------------------------------------------------------------------------------------------
// assume a and b are both positive, what is runtime, what does algorithm do:
const div = (a: number, b: number) => {
  let count: number = 0;
  let sum: number = b;
  while (sum <= a) {
    sum = sum + b;
    count = count + 1;
  }
  return count;
}
// walking through algorithm, starts at 0 then goes until sum <= b, so time is O(a / b).


// 5-----------------------------------------------------------------------------------------------------
// The following code computse the integer square root of a nmber If the number is not a perfect square, then it returns -1. It does this by successive guessing, if n is 100, it guess 50, too high? Try something lower - halfway between 1 and 50. What is the runtime?
let sqrt_helper = (n: number, min: number, max: number): any => {
  if (max > min) {
    return -1;
  }
  let guess: number = Math.floor((min + max) / 2);
  if (guess * guess === n) { // found it
    return guess;
  } else if (guess * guess < n) { // too low
    return sqrt_helper(n, guess + 1, max) // try higher
  } else { // too high
    return sqrt_helper(n, min, guess -1) // try lower
  }
}

let sqrt = (n: number) => {
  return sqrt_helper(n, 1, n)
}

// step through it:
// sqrt(64) -> sqrt_helper(64, 1, 64)
// sqrt_helper(n=64, min=1, max=64) -> guess = 65/2 = 32
  // guess * guess = 1024 // too high
  // return sqrt_helper(n=64, 1, 31)
    // sqrt_helper(n=64, min=1, max=31) -> guess = 16
    // guess * guess = 256 // too high
    // return sqrt_helper(n=64, min=1, max = 15)
      // sqrt_helper(n=64, min=1, max=15) -> guess = 8
      // guess * guess = 64 // found it
      // return 8
// that means n = 8 and it took 3 steps, so the runtime is O(log(n))

// 6---------------------------------------------------------------------------------------------------
// the following computes the integer square root of a number if the number is not a perfect square, then it returns -1. It does this by trying increasingly larger numbers unitl it finds the right value (or is too high). What is the runtime?
const sqrt_ = (n: number): number => {
  for (let guess = 1; guess * guess <=n; guess++) {
    if (guess * guess === n) {
      return guess
    }
  }
  return -1
}
// stepping through the algorithm: sqrt_(64)
// sqrt(64) -> guess = 1, 1*1 === 1 // too low
// guess = 2, 2*2 === 4 // too low
// guess = 3, 3*3 === 9 // too low
// guess = 4, 4*4 === 16 // too low
// guess = 5, 5*5 === 25 // too low
// guess = 6, 6*6 === 36 // too low
// guess = 7, 7*7 === 49 // too low
// guess = 8, 8*8 === 64, // thats it,
  // return guess
// in this case, n was 64 and the function was called sqrt(n) or 8 times. Therefore the runtime is O(sqrt(N))


// 7---------------------------------------------------------------------------------------------------
// if a binary search tree is not balanced, how long might it take to find an element in it.
// well worst case is that the binary search tree touches every element in the tree, which is O(N).


// 8---------------------------------------------------------------------------------------------------
// you are looking for a specific value in a binary tree, but the tree is not a binary search tree. What is the time complexity of this?
// difference between binary search tree and binary tree: the nodes are in no particular order in a binary tree. In a binary search tree the nodes are organized relative to eachother. All the nodes to the left of a node are less, all the nodes to the right of a node are greater than.
  // therefore, if you are looking up a specific value in a binary tree, there is no order, therefore worst case is it could touch every node, O(N)


// 9---------------------------------------------------------------------------------------------------
// the appendToNew method appends a value to an array by creating a new, longer array and returning this longer array. You've used appendToNew method to create a copyArray function that repeatedly calls appendToNew. How long does copying an array take?
const copyArray = (array: number[]): any => {
  let copy: number[] = new Array(0)
  array.forEach((value: number) => {
    copy = appendToNew(copy, value)
  })
  return copy
}

const appendToNew = (array: number[], value: number) => {
  // copy all elements over to new array
  let bigger: number[] = new Array(array.length + 1)
  for (let i =0; i < array.length; i++) {
    bigger[i] = array[i]
  }
  // add new element
  bigger[bigger.length - 1] = value
  return bigger
}
// prettier-ignore
{
// step through this algorithm. copyArray([0,1,2,3])
  // copy = appendToNew(array=[], value=0)
    // appendToNew([], 0) -> bigger = [ 0 ]
    // bigger[0] = 0 (bigger = [0])
    // copy = [0]
      // copy = appendToNew(array=[0], value=1) -> bigger = [0, 0]
      // bigger [0] = 0
      // bigger[1] = 1
        // copy = appendToNew(array=[0], value=2) -> bigger = [0, 0, 0]
        // bigger[0] = 0
        // bigger[1] = 1
        // bigger[2] = 2
          // copy = appendToNew(array=[0], value=3) -> bigger = [0, 0, 0, 0]
          // bigger[0] = 0
          // bigger[1] = 1
          // bigger[2] = 2
          // bigger[3] = 3
}
// do this until its done for each time you do this.
  // the for loop in copy Array happens L times where L is the length of the initial array so that's O(L) time ignoring the recursion
    // the first time appendToArray is called it runs 1 time, then 2 times, then 3 times, then 4 times.
    // 1 + 2 ... + (L-1) + L times this is L(L+1)/2 times total running this for loop based on the outer loop.
    // this simplifies down to O(L^2) times 


// 10---------------------------------------------------------------------------------------------------
// the following sums the digits in a number
const sumDigits = (n: number) => {
  let sum = 0;
  while (n > 0) {
    sum = sum + n % 10
    n = Math.floor(n / 10)
  }
  return sum
}
// step through function sumDigits(n=649):
// sum = 0 + 9
// n = 649 / 10 = 64
  // sum = 9 + 4
  // n = 64 / 10
    // sum = 13 + 6 = 19
    // n = 0
// return 19
// big O time is directly proportional to how many digits there are or how many times N can be divided by 10.
// runtime is then log(N) or log base 10 (N)


// 11---------------------------------------------------------------------------------------------------
// the following prints all strings of length k where the characters are in sorted order. It does this by generating all strings of length k then checking if each is sorted. What is the runtime?
// const printSortedStrings = (remaining: number): void => {
//   printSortedStrings_(remaining, '')
// }

// const printSortedStrings_ = (remaining: number, prefix: string) => {
//   if (remaining === 0 ) {
//     if (isInOrder(prefix)) {
//       console.log(prefix)
//     }
//   } else {
//     for (let c = 'a'; c <= 'z'; c++) {
//       printSortedStrings_(remaining - 1, prefix + c);
//     }
//   }
// }

// const isInOrder = (s: string): boolean => {
//   let isInOrder: boolean = true;
//   for (let i = 1; i < s.length; i++) {
//     let prev = s.charAt(i-1)
//     let curr = s.charAt(i)
//     if (prev > curr) {
//       isInOrder = false
//     }
//   }
//   return isInOrder
// }

// step through printSortedStrings(2)
// goes aa, ab, ac, ad ... az
// then goes bb, bc, bd ... bz
// 26 then 25 then 24 then 23 
// let c = number of characters in the alphabet, k is the length of the string
// guess is O(c^k) but then you have to factor in how long it takes to do the isInOrder function which is O(k)
// so the total time is O(k*c^k) or O(k*26^k)


// 12---------------------------------------------------------------------------------------------------
// following code computes the intersection (number of elements in common) of the arrays. It assumes that neither has duplicates. It computes the intersection by sorting one array, array b and the iterating through array a checking (via binary search) if each value is in b. What is the runtime?
// const intersection = (a: number[], b: number[]) => {
  
//   // mergesort takes O(n log(n)) time
//   mergesort(b);
  
//   let intersect = 0
//   for (let x of a) {
      // binarySearch takes O(log(n)) time
//     if (binarySearch(b, x) > 0) {
//       intersect = intersect + 1
//     }
//   }
//   return intersect;
// }

// variables. b = length of b, a = length of a.
// first algorithm does mergesort which is O(b log(b)) time;
// next is for loop which is O(a) time
  // within for loop is binary search of b which is O(log(b)) time
    // O(1) within if statement within for loop

// we're left with O(b log(b))+O(a)*O(log(b))
  // so O(b*log(b) + a*log(b))
}
