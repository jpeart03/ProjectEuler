// find sum of all natural numbers that are:
// - below 1000
// - multiples of 3 or 5

const getSumOfMultiples = (m1, m2, max) => {
    let allNumsArr = [...Array(max - 1)].map((_, i) => i + 1)
    let multiplesArr = allNumsArr.filter(n => n % m1 === 0 || n % m2 === 0)

    return multiplesArr.reduce((acc, cur) => acc + cur)

}

console.log(getSumOfMultiples(3, 5, 1000))