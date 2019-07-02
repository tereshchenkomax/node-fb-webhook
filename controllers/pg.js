const {Client} = require('pg');
const prodclientsettings = {
	connectionString: process.env.DATABASE_URL,
	ssl: true,
};
const stageclientsettings = {
	connectionString: process.env.DATABASE_URL
};

const client = new Client((process.env.NODE_ENV !== 'prod')? stageclientsettings : prodclientsettings);

client.connect().catch(err => console.log(err));

module.exports = {client};
