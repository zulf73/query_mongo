var MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://unique:unique@cluster0-3cmqe.mongodb.net/?retryWrites=true&w=majority';
var vCounter = 10;
var assert = require('assert')
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    var db = client.db('prod');
    /*
    db.collection("uniqueness").count(function (err, count) {
        console.log(err)
        console.log(count);
        db.close();
    });
    */
    db.collection("uniqueness").find({ counter: 5643 }).toArray(
        function (err, item) {
            console.log(item);
            client.close();
        });
});
