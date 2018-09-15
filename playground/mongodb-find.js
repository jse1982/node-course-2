// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb'); // object destructuring

// const obj = new ObjectID();
// console.log(obj);

// var user = {name: 'bah', age: 355};
// var {name} = user;


const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

var db;

MongoClient.connect(url, (err, client) => {

    if (err) {
        return console.log('Unable to connect to database');
    }

    db = client.db(dbName);

    // db.collection('Todos').find().count().then( data => {
    //     //console.log(JSON.stringify(data, undefined, 2));
    //     console.log(`Count was ${data}`);
    // })
    // .catch(error => {
    //     console.log('Failed! Error was ', error);
    // })

    db.collection('Users').find({age: 35}).toArray().then( data => {
        console.log(JSON.stringify(data, undefined, 2));
        // console.log(`Count was ${data}`);
    })
    .catch(error => {
        console.log('Failed! Error was ', error);
    })    

    client.close();

});