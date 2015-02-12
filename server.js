var express = require('express'),
	mongoose = require('mongoose'),
	stylus = require('stylus'),
	logger = require('morgan'),
	bodyParser = require('body-parser');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
	return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser());
app.use(stylus.middleware(
	{
		src: __dirname + '/public',
		compile: compile
	}
));
app.use(express.static(__dirname + '/public'));

var mongooseOptions = {
	user: 'multiAdmin',
	pass: 'password'
};

mongoose.connect('mongodb://localhost/multivision', mongooseOptions);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
	console.log('multivision db opened');
});
<<<<<<< HEAD

app.get('/partials/*', function (req, res) {
	res.render('../../public/app/' + req.params[0]);
=======
var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc) {
	if (err) {
		console.log(err.toString());
	} else {
		mongoMessage =  messageDoc.message;	
	}
});

app.get('/partials/:partialPath', function (req, res) {
	res.render('partials/' + req.params.partialPath);
<<<<<<< HEAD
>>>>>>> FETCH_HEAD
=======
>>>>>>> FETCH_HEAD
});

app.get('*', function(req, res) {
	res.render('index');
});

var port = 8000;
app.listen(port);
console.log('Listening on port ' + port + '...');