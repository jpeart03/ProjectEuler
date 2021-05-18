// find the sum of all the primes below two million
// solution works, but took ~6 mins to run on linux vm... need to refactor
const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

const sumPrimes = (n) => {
    let sum = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) sum += i;
    }
    return sum;
};

console.log(sumPrimes(2000000));
