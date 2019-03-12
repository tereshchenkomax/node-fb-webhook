const puppeteer = require('puppeteer');

/* jshint ignore:start */
exports.puppeteerGetJSONfromPage = async () => {
	const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
	const page = await browser.newPage();
	await page.goto('https://api.facebook.com/restserver.php?api_key=3e7c78e35a76a9299309885393b02d97&email=tereshchenkomax%40gmail.com&format=JSON&generate_session_cookies=1&locale=en_us&method=auth.login&password=21mnegodKEKER&return_ssl_resources=0&v=1.0&sig=95a4f0162f5c029482069274ac57709c');

	let content = await page.content();

	let innerText = await page.evaluate(() => {
		return JSON.parse(document.querySelector("body").innerText);
	});

	console.log("innerText now contains the JSON");
	console.log(innerText);
	await browser.close();
};
