export const updateItem = async (event) => {
    const { id, data } = JSON.parse(event.body);

    if (!id || !data) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Invalid input' }),
        };
    }

    const params = {
        TableName: process.env.TABLE_NAME,
        Key: { id },
        UpdateExpression: 'set #data = :data',
        ExpressionAttributeNames: {
            '#data': 'data',
        },
        ExpressionAttributeValues: {
            ':data': data,
        },
        ReturnValues: 'UPDATED_NEW',
    };

    try {
        const result = await dynamoDbClient.update(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(result.Attributes),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error updating item', error }),
        };
    }
};