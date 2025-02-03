import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the FullStack Serverless App</h1>
      <nav>
        <ul>
          <li>
            <Link href="/create">Create Item</Link>
          </li>
          <li>
            <Link href="/read">Read Items</Link>
          </li>
          <li>
            <Link href="/update">Update Item</Link>
          </li>
          <li>
            <Link href="/delete">Delete Item</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;