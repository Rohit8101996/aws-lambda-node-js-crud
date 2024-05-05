

//To make it more readable instead of module.exports together we will decouple it with const and module.exports seperately
// module.exports.handler = async (event) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: "Go Serverless v3.0! Your function executed successfully!",
//         input: event,
//       },
//       null,
//       2
//     ),
//   };
// };
// example const handler = async(event) ... 

//change name from handler to hello 
//then export it as handler
//update filename from index to hello and then
//update serverless.yml file line number 10 with directory structure path/filename/handler name to be exported

//Also 
//https://stackoverflow.com/questions/48859169/error-types-can-only-be-used-in-a-ts-file-visual-studio-code-using-ts-che
const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports = {
  handler : hello
}