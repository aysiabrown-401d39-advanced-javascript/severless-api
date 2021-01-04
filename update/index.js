'use strict';

const peopleModel = require('./people.schema');

exports.handler = async (event) => {
    const {name, age, gender} = JSON.parse(event.body);
    const id = event.pathParameters.id;
    try {
        if(id) {
            var data =  await peopleModel.update({"id": id, "name": name, "age": age, "gender": gender});
        }
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