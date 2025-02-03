import { useState } from 'react';

const DeleteItem = () => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async (e) => {
        e.preventDefault();
        const response = await fetch(`/api/deleteItem`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        if (response.ok) {
            setMessage('Item deleted successfully');
            setId('');
        } else {
            setMessage('Failed to delete item');
        }
    };

    return (
        <div>
            <h1>Delete Item</h1>
            <form onSubmit={handleDelete}>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Enter item ID"
                    required
                />
                <button type="submit">Delete Item</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default DeleteItem;