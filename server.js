// load environment properties from a .env file for local development
require('dotenv').config({ silent: true });

const app = require('./app.js');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

//const port = process.env.PORT || 3000;
app.listen(port,ip);
//console.log('listening at:', port);
