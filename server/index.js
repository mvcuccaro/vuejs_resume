process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const express 	= require('express');
const fs 		= require('fs');
const https 	= require('https');
const http 		= require('http');
const resume 	= require('./data/resume.js');

let private_key = fs.readFileSync('./keys/server.key', 'utf8');
let certificate = fs.readFileSync('./keys/server.crt', 'utf8');

/**
* https handled by proxy
let credentials = {
	key: private_key,
	cert: certificate
};
*/

const app = new express();
//let https_server = https.createServer(credentials, app); https handled mby proxy

let http_server  = http.createServer(app);

app.use('/dist', express.static('../dist'));


app.use(function(req, res, next) { 
	res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next(); 
});

app.get('/', (req, res) => {
	console.log(req.url);
	const rs = fs.createReadStream('../index.html');
	rs.pipe(res);
})

app.get('/data', (req, res) => {
	res.end(JSON.stringify({data:['eep', 'op']}));
});

app.get('/data/resume', (req, res) => {
	res.end(JSON.stringify(resume));
})

/*
* https handled by proxy
https_server.listen(443, () => {
	console.log('listening on 443');
})
*/

http_server.listen(8075, () => {
	console.log('listening on 8075');
})
