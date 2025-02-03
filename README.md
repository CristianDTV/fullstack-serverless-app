# Fullstack Serverless Application

Este proyecto es una aplicacion fullstack construida usando Serverless Framework para el backend and Next.js para el frontend. Tambien se uso AWS DynamoDB para el almacenamiento de los datos y con un CRUD para el manejo de operaciones.

## Project Structure

```
fullstack-serverless-app
├── backend
│   ├── src
│   │   ├── handlers
│   │   │   ├── createItem.ts
│   │   │   ├── readItem.ts
│   │   │   ├── updateItem.ts
│   │   │   └── deleteItem.ts
│   │   └── utils
│   │       └── dynamoDbClient.ts
│   ├── serverless.yml
│   ├── package.json
│   └── tsconfig.json
├── frontend
│   ├── pages
│   │   ├── index.tsx
│   │   ├── create.tsx
│   │   ├── read.tsx
│   │   ├── update.tsx
│   │   └── delete.tsx
│   ├── components
│   │   └── ItemForm.tsx
│   ├── public
│   ├── styles
│   │   └── globals.css
│   ├── next.config.js
│   ├── package.json
│   └── tsconfig.json
├── .gitignore
└── README.md
```

## Backend

El backend es construido usando Serverless Framework y TypeScript. It consists of several handler functions that interact with a DynamoDB table:

- **createItem.ts**: Handles the creation of new items.
- **readItem.ts**: Retrieves items based on their ID.
- **updateItem.ts**: Updates existing items.
- **deleteItem.ts**: Deletes items based on their ID.

### Setup

1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`.
3. Deploy the backend: `serverless deploy`.

## Frontend

The frontend is built using Next.js and TypeScript. It provides a user interface for performing CRUD operations:

- **index.tsx**: Main entry point with links to CRUD operations.
- **create.tsx**: Form for creating new items.
- **read.tsx**: Displays items from the database.
- **update.tsx**: Form for updating existing items.
- **delete.tsx**: Interface for deleting items.

### Setup

1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`.
3. Start the development server: `npm run dev`.

## GitHub Repository

This project is managed using Git. Follow these steps to set up your repository:

1. Initialize a new Git repository: `git init`.
2. Add remote origin: `git remote add origin <your-repo-url>`.
3. Create a new branch for features: `git checkout -b feature/<feature-name>`.
4. Commit your changes: `git commit -m "Your commit message"`.
5. Push your branch: `git push origin feature/<feature-name>`.
6. Create a pull request on GitHub to merge your changes into the main branch.

## License

This project is licensed under the MIT License. See the LICENSE file for details.