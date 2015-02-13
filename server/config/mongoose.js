var mongoose = require('mongoose');

module.exports = function(config) {
	var mongooseOptions = {
		user: 'multiAdmin',
		pass: 'password'
	};

	mongoose.connect(config.db, mongooseOptions);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error...'));
	db.once('open', function callback() {
		console.log('multivision db opened');
	});
}