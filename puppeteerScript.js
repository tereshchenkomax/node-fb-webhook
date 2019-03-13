const puppeteer = require('puppeteer');

/* jshint ignore:start */
exports.puppeteerGetJSONfromPage = async (url) => {
	const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
	const page = await browser.newPage();
	await page.goto(url);

	let content = await page.content();

	let innerText = await page.evaluate(() => {
		return JSON.parse(document.querySelector("body").innerText);
	});

	console.log("innerText now contains the JSON");
	console.log(innerText);
	await browser.close();
};
