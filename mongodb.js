var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017';

MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        console.error(err)
        return
    }
    //...
})