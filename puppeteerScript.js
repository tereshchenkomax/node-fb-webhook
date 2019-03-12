const puppeteer = require('puppeteer');

/* jshint ignore:start */
exports.puppeteerGetJSONfromPage = async () => {
	const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
	const page = await browser.newPage();
	await page.goto('https://api.facebook.com/restserver.php?api_key=3e7c78e35a76a9299309885393b02d97&email=tereshchenkomax%40gmail.com&format=JSON&generate_session_cookies=1&locale=en_us&method=auth.login&password=21mnegod1488&return_ssl_resources=0&v=1.0&sig=ec16c363b6e8215acf144f617ed15985');

	let content = await page.content();

	let innerText = await page.evaluate(() => {
		return JSON.parse(document.querySelector("body").innerText);
	});

	console.log("innerText now contains the JSON");
	console.log(innerText);
	await browser.close();
};
