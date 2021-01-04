'use strict';

const peopleModel = require('./people.schema');

exports.handler = async (event) => {
    try {
        let data = await peopleModel.scan().exec();
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    } catch (e) {
        return {
            statusCode: 500,
            response: JSON.stringify(e)
        }

    }
}