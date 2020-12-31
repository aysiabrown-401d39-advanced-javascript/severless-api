'use strict';

const peopleModel = require('../../schemas/people.schema');

exports.handler = async (event) => {
    try {
        let data = peopleModel.query('name');
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