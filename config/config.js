const AWS = require("aws-sdk");

AWS.config.update({ regions: "us-east-2" });

const tableName = process.env.TABLE_NAME;

const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports = {
  AWS,
  tableName,
  dynamodb,
};
