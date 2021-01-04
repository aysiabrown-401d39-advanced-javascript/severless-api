'use strict';

const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
    'id': String,
    'name': String,
    'age': Number,
    'gender': String,
})

module.exports = dynamoose.model('people', peopleSchema);