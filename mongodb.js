var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017';

MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, db) => {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myobj = {name:cspeaker , position: }; //Adds cspeaker from scrape.js variable
        dbo.Collection("speakers").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("Speaker Add");
            db.close();
        });
    });