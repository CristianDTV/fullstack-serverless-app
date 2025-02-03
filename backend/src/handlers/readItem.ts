export const readItem = async (event) => {
    const { id } = event.pathParameters;

    const params = {
        TableName: process.env.TABLE_NAME,
        Key: {
            id: id,
        },
    };

    try {
        const data = await dynamoDb.get(params).promise();
        if (!data.Item) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: 'Item not found' }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify(data.Item),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Could not retrieve item', error }),
        };
    }
};