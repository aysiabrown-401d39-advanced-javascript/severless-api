'use strict';

const { stringify } = require('uuid');
const peopleModel = require('./people.schema');

exports.handler = async (event) => {
    const id = event.pathParameters.id;

    try {
        let del;
        if(id) {
            del = await peopleModel.delete(id);
        } 
        return {
            statusCode: 200,
            body: 'Deletion was succcessful!'
        }
    } catch(e) {
        return {
            statusCode: 500,
            response: JSON.stringify(e)
        }

    }
}