let { v4 } = require("uuid");
let AWS = require("aws-sdk");

const updateStudent = async (event) => {

    console.log("this is first line");
    const dynamo = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters; 
    const { completed } = JSON.parse(event.body);

   await dynamo.update({
        TableName: "StudentTable",
        Key: {id},
        UpdateExpression: "set completed = :completed", //update expression with expression attribute
        ExpressionAttributeValues: {
            ':completed': completed //set expression attribute similar to sql
        },
        RETURNVALUES: "ALL_NEW" // return values which are modified
    }).promise(); // dynamodb runs async 

    return {
      statusCode: 200,
      body: JSON.stringify({msg : "Student Updated"})
    };
  };
  
  module.exports = {
    handler : updateStudent
  }