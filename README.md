







This APPLICATION USES SERVERLESS FRAMEWORK TO BUILD A BACKEND CRUD APPLICATION IN NODEJS LAMBDA 



<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework Node HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.

This template does not include any kind of persistence (database). For more advanced examples, check out the [serverless/examples repository](https://github.com/serverless/examples/) which includes Typescript, Mongo, DynamoDB and other examples.

## Usage

### Deployment

```
$ serverless deploy
```

After deploying, you should see output similar to:

```bash
Deploying aws-node-http-api-project to stage dev (us-east-1)

✔ Service deployed to stack aws-node-http-api-project-dev (152s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  hello: aws-node-http-api-project-dev-hello (1.9 kB)
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

Which should result in response similar to the following (removed `input` content for brevity):

```json
{
  "message": "Go Serverless v2.0! Your function executed successfully!",
  "input": {
    ...
  }
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```
{
  "statusCode": 200,
  "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```


Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).






Steps for CRUD aws lambda node app



1. First Create AWS Account 

2. Create a iam user which have permissions to execute lambda(for now admin access)

3. Now Install AWS CLI 2.0

4. CONFIGURE AWS CLI LOCALLY USING aws configure

5. Once done we will use serverless framework to create lambda template download it using npm i.e., npm install -g serverless

6. run serverless command

7. chhosse a template ., i choose aws -node-js -rest api temp

8. deploy during start . u will see stack sets created in clod formation , lambda and api gateway got created

9. api path visible on terminal to test via postman 


10. change region in serverless.yml 

11. try deploying it again serverless deploy -v

12. Also serverless remove --stage dev --region us-east-1 to remove all resource created 

13. Organise files under folders in the template project like all handlers under handler package

14. Now WE WILL BUILD CRUD APP using aws lambda 

5. for this we need to have a db , with aws we have a great nosql db dynamo db which actually fetches data 
we can provision anything using serverless framework which is IAAC for now we will go with dynamodb 

16. update serverless.yml for dynamodb tbl creation and lambda creation 
with permission to access dynamodb from lambda 
Also create handlers and add them to serverless.yml to multiple handlers support in one lambda 
