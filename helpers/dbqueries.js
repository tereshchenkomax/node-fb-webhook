const {client} = require('../controllers/pg');

function cronQuery() {
	const text = 'update users set image=null where lastdate < now()-\'30 day\'::interval;';
	try {
		client.query(text);
	} catch (e) {
		console.log(e)
	}
}

async function hasUserID(psid) {
	const text = `select userid from users where psid=${psid}`;
	try {
		const res = await client.query(text);
		if (res.rowCount > 0) {
			return res.rows[0].userid
		}
	} catch (e) {
		console.log(e);
	}
}

async function hasPSID(userid) {
	console.time('hasPSID');
	try {
		const res = await client.query(`SELECT psid FROM users WHERE userid=${userid}`);
		console.log('rows', res.rows);
		if (res.rowCount > 0) {
			return res.rows[0].psid
		}
	} catch (e) {
		console.log('PSID is not in DB yet');
	}
	console.timeEnd('hasPSID');
}

async function removeImageFromDB(psid) {
	if (psid) {
		const text = `update users set image=null where psid=${psid};`;
		try {
			await client.query(text);
			console.log('img was removed for: ', psid);
		} catch (e) {
			console.log(e)
		}
	} else {
		console.log('PSID should be valid');
	}
}

module.exports = {
	cronQuery,
	hasUserID,
	hasPSID,
	removeImageFromDB
};
