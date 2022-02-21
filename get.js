const { AWS, tableName, dynamodb } = require("./config/config");

exports.handler = async (event) => {
  const userId = event.pathParameters.userId;

  const data = await dynamodb
    .get({
      TableName: tableName,
      Key: { userId },
    })
    .promise();

  if (data.Item) {
    return {
      statusCode: 200,
      body: JSON.stringify(data.Item),
    };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "No User is found" }),
    };
  }
};
