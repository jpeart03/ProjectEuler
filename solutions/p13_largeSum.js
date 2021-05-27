const puppeteer = require("puppeteer");

// using puppeteer to scrape the problem dataset... didn't want waste time copying, pasting and reformatting
async function getData() {
    try {
        const browser = await puppeteer.launch();
        const [page] = await browser.pages();

        await page.goto("https://projecteuler.net/minimal=13", {
            waitUntil: "networkidle0",
        });
        const data = await page.evaluate(() =>
            document.querySelector("*").innerHTML.match(/\d{50}/g)
        );

        await browser.close();

        return data;
    } catch (err) {
        console.error(err);
    }
}

// Get first 10 digits of the sum of the given 100 50-digit numbers.

// running solution within async IIFE to run getData()
(async () => {
    // getting data, and mutating each string element into a BigInt
    const problemData = await getData();
    const bigIntProblemData = problemData.map((e) => BigInt(e));

    // summing arr of BigInts and returning first 10 digits
    const sum = bigIntProblemData.reduce((acc, cur) => acc + cur);
    const answerString = sum.toString().slice(0, 10);

    console.log(answerString);
})();
