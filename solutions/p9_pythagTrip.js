// Find the pythagorean triplet for which a + b + c = 1000
// a < b < c ... a ** 2 + b ** 2 = c ** 2

const getTrip = (targetSum) => {
    // iterating through a's
    for (let a = 1; a < targetSum - 1; a++) {
        // then b's for each a
        for (let b = a + 1; b < targetSum - 1; b++) {
            // setting c to sqrt of a**2 + b**2
            c = Math.sqrt(a ** 2 + b ** 2);
            // checking if c is a natural number (no decimals)
            if (c % 1 === 0) {
                // checking the sum of a, b, and c is the target
                if (a + b + c === targetSum) {
                    // returning an object to verify return value
                    return {
                        nums: [a, b, c],
                        prod: a * b * c,
                    };
                }
            }
        }
    }
    return 0;
};

console.log(getTrip(1000));
