'use strict';

const peopleModel = require('../../schemas/people.schema');

exports.handler = async (event) => {
    const id = event.pathParameters.id;
    console.log('__id__', id);

    try {
        let data;
        if(id) {
            const list = await peopleModel.query('id').eq(id).limit(1).exect();
            data = list;
        } else {
            data = await peopleModel.scan().exect();
        }

    } catch (e) {
        return {
            status: 500,
            response: JSON.stringify(e)
        }
    }
}