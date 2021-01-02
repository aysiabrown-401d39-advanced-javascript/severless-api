'use strict';

const peopleModel = require('../schemas/people.schema');

exports.handler = async (event) => {
    const id = event.pathParameters.id;

    try {
        let del;
        if(id) {
            del = await peopleModel.query('id').eq(id).limit(1).exec();
            del.delete();
            console.log('Delete was successful!')
        } else {
            del = await peopleModel.scan().exec();
        }
    } catch(e) {
        return {
            statusCode: 500,
            response: JSON.stringify(e)
        }

    }
}