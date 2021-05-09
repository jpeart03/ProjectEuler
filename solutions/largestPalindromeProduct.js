// find the largest palindrome made from the product of two three-digit numbers

// creating my own range function, end inclusive
const range = (start, end) => {
    return [...Array(end - start + 1)].map((_, i) => start + i)
}

// array of all three digit numbers, reversed so that higher numbers are at starting indexes
const threeDigits = range(100, 999).reverse()

const getPalindrome = () => {
    let palindromeProds = []

    for (let i = 0; i < threeDigits.length - 1; i++) {
        for (let j = i; j < threeDigits.length; j++) {
            let product = threeDigits[i] * threeDigits[j]
            if (product.toString().split('').reverse().join('') === product.toString())
                palindromeProds.push(product)
        }
    }
    return palindromeProds.sort((a, b) => b - a)[0]
}

console.log(getPalindrome())