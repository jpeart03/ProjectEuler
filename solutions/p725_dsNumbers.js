// digit sum numbers are numbers where one digit is the sum of the other digits. (3003, 32812)

// helper function to determine if num is DS Number
const isDsNum = (num) => {
    let nums = num.toString().split('').map(n => parseInt(n)).sort()
    return nums.pop() === nums.reduce((acc, cur) => acc + cur)
}

// TODO: figure out how to handle numbers and sum DS numbers up to 2020 digits...
console.log(isDsNum(6123))