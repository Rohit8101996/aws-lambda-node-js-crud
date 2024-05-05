let { v4 } = require("uuid");
let AWS = require("aws-sdk");

const addStudent = async (event) => {
  //https://dev.to/koshirok096/colons-equals-and-semicolons-in-javascript-bite-size-article-1bk2

    console.log("this is first line");
    const dynamo = new AWS.DynamoDB.DocumentClient();
    let { name } = JSON.parse(event.body);
    const createdAt= new Date().toISOString(); //toISOString is required to save date
    const id = v4();

    console.log("This is id " + id);

    const student = {
        id ,
        name,
        createdAt,
        completed : false
    }

   await dynamo.put({
        TableName: "StudentTable",
        Item: student
    }).promise(); // dynamodb runs async 

    return {
      statusCode: 200,
      body: JSON.stringify(student)
    };
  };
  
  module.exports = {
    handler : addStudent
  }