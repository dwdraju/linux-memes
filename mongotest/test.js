var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/mongotest';

var insertDocument = function(db, callback) {
	db.collection('testing').insertOne( {
	   	'title': 'MyTitle'
	   },function(err, result){
		    assert.equal(err, null);
		    console.log("Inserted a document into the restaurants collection.");
		    callback();
  });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});