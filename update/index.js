'use strict';

const peopleModel = require('../schemas/people.schema');

exports.handlers = async (event) => {
    const {name, age, gender} = JSON.parse(event.body);
    const id = event.pathParameters.id;
    try {
        if(id) {
            const data =  await peopleModel.update({"id": id, name, age, gender});
        }
       return {
           statusCode: 200,
           body: JSON.stringify(data)
       }
    } catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify(e)
        }

    }
}