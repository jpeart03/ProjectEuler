// continue to add n to tnum until tnum can be divided by 500 things
// works but slow... in need of refactor

const getDivisorCount = (num) => {
    let d = num - 1;
    let dCount = 1;
    while (d > 0) {
        dCount = num % d === 0 ? dCount + 1 : dCount;
        d--;
    }
    return dCount;
};

const getFirstTriangleNumber = (numOfDivisors) => {
    let n = 0;
    let tnum = 0;
    let dCount = 0;

    while (dCount < numOfDivisors) {
        n++;
        tnum += n;

        dCount = getDivisorCount(tnum);
    }
    return tnum;
};

console.log(getFirstTriangleNumber(500));
