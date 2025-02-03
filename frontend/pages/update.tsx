import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ItemForm from '../components/ItemForm';

const UpdatePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`/api/read?id=${id}`)
        .then((response) => response.json())
        .then((data) => {
          setItem(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching item:', error);
          setLoading(false);
        });
    }
  }, [id]);

  const handleUpdate = async (updatedItem) => {
    const response = await fetch(`/api/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, ...updatedItem }),
    });

    if (response.ok) {
      router.push('/read');
    } else {
      console.error('Error updating item');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Update Item</h1>
      {item && <ItemForm item={item} onSubmit={handleUpdate} />}
    </div>
  );
};

export default UpdatePage;