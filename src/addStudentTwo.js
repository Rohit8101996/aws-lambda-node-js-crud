const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const middy = require("@middy/core");
const httpJsonBodyParser = require("@middy/http-json-body-parser");


// SOME HOW MIDDY WAS NOT WORKING 
//middy examples https://blog.logrocket.com/writing-aws-lambda-middleware-middy-js/#prerequisites
//https://middy.js.org/docs/events/s3
const addStudentTwo = async (event) => {

    const dynamo = new AWS.DynamoDB.DocumentClient();
    //If you see this JSON.parse is a bit annoying, so we can add a middle ware named middy why we need is bcoz we want authentication of each lambda or logging at global level
    //let { name } = JSON.parse(event.body); so in that case we dont write like this 
    let { name } = event.body;
    const createdAt= new Date().toISOString(); //toISOString is required to save date
    const id = v4();


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
    //to enable middy ,wrap this handler with middy and perform any action
    handler : middy(addStudentTwo).use(httpJsonBodyParser())
  }