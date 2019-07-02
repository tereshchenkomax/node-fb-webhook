const CronJob = require('cron').CronJob;
const {cronQuery} = require('../helpers/dbqueries');

const job = new CronJob('30 23 * * *', function () {
		cronQuery();
		console.log('You will see this before midnight');
	},
	null,
	true,
	'Europe/Kiev');

job.start();
module.exports = job;
