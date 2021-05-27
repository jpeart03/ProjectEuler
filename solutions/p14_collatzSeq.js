// helper function to get sequence
const getSeq = (num) => {
    let seqCount = 1;
    while (num !== 1) {
        if (num % 2 == 0) num = num / 2;
        else num = num * 3 + 1;
        seqCount++;
    }
    return seqCount;
};

const getLargestSeq = (startingNum) => {
    let largestSeqCount = 0;
    let answer;

    while (startingNum > 1) {
        let currentSeqCount = getSeq(startingNum);
        if (currentSeqCount > largestSeqCount) {
            largestSeqCount = currentSeqCount;
            answer = startingNum;
        }
        startingNum--;
    }
    return answer;
};

console.log(getLargestSeq(999999));
