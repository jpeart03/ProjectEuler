// prime helper function
const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// originally thought to put all primes into an array, and return last index...
// waste of memory if i only need the nth, so i went this route. Keeping track of the nth prime
const getNthPrime = (n) => {
  let thePrime;
  for (let i = 2, j = 0; j < n; i++) {
    if (isPrime(i)) {
      j++;
      thePrime = i;
    }
  }
  return thePrime;
};

console.log(getNthPrime(10001));
