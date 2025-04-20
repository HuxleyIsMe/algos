/***
 *
 * Dynamic programming is hard, we need to be good with recursion.
 *
 * What is dynamic programming?
 *
 *
 *
 * Think words of overlapping subproblems, optimal substrucutre ?
 *
 *
 * Its a method of breaking down a complex problem  into simpler subproblems
 * and solving those problems once and storing their solutions.
 *
 *
 *
 *
 *
 * What the hello is overlapping subproblems?
 *
 * it only works on problems when overlapping sub problems :
 *
 * This means we can break problem down into chunks and reuse?
 *
 *
 * a lot of this we are looking at memoization which is very cool
 * the idea is we store the data in the table or our data so we can just use that peice
 *
 *
 *
 */

// coolie beans bebe
const fib = (n, memo = {}) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) {
    return 1;
  }

  let res = fib(n - 1, memo) + fib((n = 2), memo);
  memo[n] = res;
  return res;
};

console.log(fib(32));

// this changes the big o as we are only heading down one branch
// this means it must be o(n) the space complexity will also be O(n)

// There is also another approach, memoization is top down
// tabulation is bottom up
//
// tabulation uses loops. This is iterative not recursive
//

const fibTab = (n) => {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
};
