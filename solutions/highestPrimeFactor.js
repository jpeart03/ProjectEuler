// get the largest prime factor of the number

// helper function to check if num is prime
// if not, return the number it is divisible by
const isNumPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return i
        }
    }
    return 1
}

// solution:
// recursively divide num by return value of isNumPrime until num is prime, then return
const getHighestPrimeFactor = (num) => {
    if (isNumPrime(num) === 1) {
        return num
    } else {
        return getHighestPrimeFactor(num / isNumPrime(num))
    }
}


console.log(getHighestPrimeFactor(600851475143))