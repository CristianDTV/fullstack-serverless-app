export const createItem = async (event) => {
    const { body } = event;
    const item = JSON.parse(body);

    // Validate the item data
    if (!item.id || !item.name) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Invalid item data' }),
        };
    }

    const dynamoDb = require('../utils/dynamoDbClient');

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: item,
    };

    try {
        await dynamoDb.put(params).promise();
        return {
            statusCode: 201,
            body: JSON.stringify(item),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Could not create item', error }),
        };
    }
};