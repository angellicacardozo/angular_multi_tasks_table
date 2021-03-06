var express = require('express')
	 ,app = express()
	 ,bodyParser = require('body-parser')
	 ,routes = require('../app/routes');

//app.set('views', path.join('./public/views'));
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);
module.exports = app;