const puppeteer = require('puppeteer');

/* jshint ignore:start */
exports.puppeteerGetJSONfromPage = async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://jsonplaceholder.typicode.com/todos/1');

	let content = await page.content();

	let innerText = await page.evaluate(() => {
		return JSON.parse(document.querySelector("body").innerText);
	});

	console.log("innerText now contains the JSON");
	console.log(innerText);
	await browser.close();
};
