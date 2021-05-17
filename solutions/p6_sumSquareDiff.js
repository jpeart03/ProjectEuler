const getDiff = () => {
    // const nums10 = [...Array(10)].map((_, i) => i + 1)
    const nums = [...Array(100)].map((_, i) => i + 1)

    let sumOfSquares = nums.map(n => n ** 2).reduce((acc, cur) => acc + cur)
    let squareOfSum = nums.reduce((acc, cur) => acc + cur) ** 2

    return squareOfSum - sumOfSquares
}

console.log(getDiff())