// return sum of even fibbonacci numbers up to 4,000,000

const buildFibSeq = (max) => {
    let fibSeq = [1, 2]

    for (i = 1;
        (fibSeq[i] + fibSeq[i - 1]) <= max; i++) {
        fibSeq.push(fibSeq[i] + fibSeq[i - 1])
    }

    return fibSeq
}

const getSumEvenFibs = (max) => {
    let allFibs = buildFibSeq(max)
    let evenFibs = allFibs.filter(f => f % 2 === 0)

    return evenFibs.reduce((acc, cur) => acc + cur)
}

console.dir(getSumEvenFibs(4000000))