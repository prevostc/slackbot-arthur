'use strict';

module.exports.hello = (event, context, callback) => {
  var body = {
    "response_type": "in_channel",
    "text": "COUILLÈRE",
  };

  const response = {
    statusCode: 200,
    body: body,
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
