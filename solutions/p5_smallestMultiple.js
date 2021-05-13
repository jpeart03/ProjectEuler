const numsTo10 = [...Array(10)].map((_, i) => i + 1);
const numsTo20 = [...Array(20)].map((_, i) => i + 1);

const isEvenlyDivisible = (num) => {
  for (let n of numsTo20) {
    if (num % n !== 0) return false;
  }

  return true;
};

// recursion doesnt work because of call stack size restriction... try while loop
// const getSmallestNum = (num, iteration = 1) => {
//   let numToTest = num * iteration;
//   if (isEvenlyDivisible(numToTest)) return numToTest;

//   return getSmallestNum(num, iteration + 1);
// };

// using while loop because recursion call stack size restriction
const getSmallestNum = (num, iteration = 1) => {
  let testNum = num * iteration;

  while (!isEvenlyDivisible(testNum)) {
    iteration++;
    testNum = num * iteration;
  }

  return testNum;
};

console.log(getSmallestNum(20));
