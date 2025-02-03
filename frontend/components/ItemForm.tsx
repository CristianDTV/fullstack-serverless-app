import React, { useState } from 'react';

interface ItemFormProps {
  initialData?: { id?: string; name?: string; description?: string };
  onSubmit: (data: { id?: string; name: string; description: string }) => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ initialData, onSubmit }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [description, setDescription] = useState(initialData?.description || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ id: initialData?.id, name, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">{initialData ? 'Update' : 'Create'} Item</button>
    </form>
  );
};

export default ItemForm;