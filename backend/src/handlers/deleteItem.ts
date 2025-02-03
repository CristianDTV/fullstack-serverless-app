export const deleteItem = async (event) => {
    const { id } = event.pathParameters;

    const params = {
        TableName: process.env.TABLE_NAME,
        Key: {
            id: id,
        },
    };

    try {
        await dynamoDb.delete(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Item deleted successfully' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Could not delete item' }),
        };
    }
};