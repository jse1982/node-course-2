// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb'); // object destructuring

// const obj = new ObjectID();
// console.log(obj);

// var user = {name: 'julian', age: 35};
// var {name} = user;


const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

var db;

MongoClient.connect(url, (err, client) => {

    if (err) {
        return console.log('Unable to connect to database');
    }

    db = client.db(dbName);

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    //     }, (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert', error);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Teenie',
        age: 2,
        location: 'Melbourne'
        }, (error, result) => {
        if (error) {
            console.log('Unable to insert', error);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });



    client.close();

});