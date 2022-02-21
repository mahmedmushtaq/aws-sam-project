const { dynamodb, tableName } = require("./config/config");

exports.handler = async (event) => {
  const userId = event.pathParameters.userId;
  const { firstName, lastName, email, website } = JSON.parse(event.body);

  const item = { userId, firstName, lastName, email, website };

  const data = await dynamodb
    .put({ TableName: tableName, Item: item })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Data inserted/updated successfully",
      data,
    }),
  };
};
