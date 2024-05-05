const AWS = require("aws-sdk");

const fetchStudentById = async (event) => {

    const {id} = event.pathParameters; 
    const dynamo = new AWS.DynamoDB.DocumentClient();

    let student;

    try{
    const results = await dynamo.get({
        TableName: "StudentTable", 
        Key: {id } 
    }).promise();
    student = results.Item;
    }
    catch(error){
        console.log("unable to fetch results" + error);
    }


    return {
      statusCode: 200,
      body: JSON.stringify(student)
    };
  };
  
  module.exports = {
    handler : fetchStudentById
  }