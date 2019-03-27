// PsidToFbid = require('psid-to-fbid'),

/*
 * Be sure to setup your config values before running this code. You can
 * set them using environment variables or modifying the config file in /config.
 *
 */

// const psidToFbid = new PsidToFbid("630204857440599", {page_token: "EAADqMIVDZBpkBAFKMWnBdN7FjhbGoLj6Ibomo9BudBdPWMEs2tchRvC805z54bDVy4GlUvoTglxaxGMqNnYluqqfpgDLCHVURFH8l4N8HU7mkZAwDTqD7TzS3oqH56MrAhKFZAd7hvihz8y95uGzKE4oAmwWQHy3CF5nBPr9Uvx9b67c7Umt3VE5ivZB5aC31AKJmBZAeZCAZDZD"});

// psidToFbid.fetchPageToken("EAADqMIVDZBpkBAEvRMR9qVfW9Or2j1TBbe1u1bZACepPxjwStHokSQi9B6cdRqsSnkqZABXCEUcPoulMEH76dzEIF4VlujZAOem22D2Rzd8Qg1wyxko1Ch4WCTshYSZC0YmssD2SfUxHaTlGbkZBaG2nad1QxmWnAr11xKNcrgAiiIpZC2ZAx9WPFRccwwre7ZAUKcWghUBP42XHdg9STnFjA1CL2rmupUPSzBZBPZCSlHWZCwZDZD")
//     .then((page_token) => {
//       console.log("Setup complete", page_token);
//     }).catch(() => {
//   console.log("Setup failed");
// }); //

//psid plugin
// psidToFbid.getFromWebhookEvent(event).then(fbid => {
// 	console.log("Got psid = " + senderID + ", fbid = " + fbid);
//
// 	//insert the user to Postgres DB
// 	const text = 'INSERT INTO users(psid, userid)\n' +
// 		'VALUES($1, $2)\n' +
// 		'ON CONFLICT (psid) \n' +
// 		'DO\n' +
// 		'UPDATE\n' +
// 		'SET userid = EXCLUDED.userid;\n';
// 	const values = [senderID, fbid];
//
// 	client.query(text, values)
// 		.then(res => {
// 			console.log(res.rows[0]);
// 		})
// 		.catch(e => console.error(e.stack));
// });
