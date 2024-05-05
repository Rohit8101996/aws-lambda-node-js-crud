const AWS = require("aws-sdk");

const fetchStudents = async (event) => {

    
    const dynamo = new AWS.DynamoDB.DocumentClient();

    let students;

    try{
    const results = await dynamo.scan({
        TableName: "StudentTable",   
    }).promise();
    students = results.Items;
    }
    catch(error){
        console.log("unable to fetch results" + error);
    }


    return {
      statusCode: 200,
      body: JSON.stringify(students)
    };
  };
  
  module.exports = {
    handler : fetchStudents
  }