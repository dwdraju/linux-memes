var mongoose = require('mongoose'),
Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/mongotest');

mongoose.connection.on('open', function() {
	console.log('Mongoose connected.');
});

var Account = new Schema({
	username: { type: String },
	date_created: { type: Date, default: Date.now },
	visits: { type: Number, default: 0 },
	active: { type: Boolean, default: false },
	age: { type: Number, required: true, min: 13, max: 120 }
});
//Static methods
Account.statics.findByAgeRange = function(min, max, callback) {
	this.find({ age: { $gt : min, $lte : max} }, callback);
};

var AccountModel = mongoose.model('Account', Account);
var newUser = new AccountModel({ username: 'randomUser'});
//ERROR due to age 
// var newUser = new AccountModel({ username: 'randomUser', age: 11 });
// 	newUser.validate(function(err) {
// 	console.log(err);
// });

newUser.save();

console.log(newUser.username);
console.log(newUser.date_created);
console.log(newUser.visits);
console.log(newUser.active);



//Static
AccountModel.findByAgeRange(18, 30, function(err, accounts){
	console.log(accounts.length); // => 2
});

//Virtual properties
Account.virtual('fullname').get(function() {
	return this.firstname + ' ' + this.lastname;
}).set(function(fullname) {
	var parts = fullname.split(' ');
	this.firstname = parts[0];
	this.lastname = parts[1];
});