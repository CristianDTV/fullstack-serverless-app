# Fullstack Serverless Application

Este proyecto es una aplicación fullstack construida utilizando **Serverless Framework** para el backend y **Next.js** para el frontend. También se usó **AWS DynamoDB** para el almacenamiento de datos, con un CRUD para la gestión de operaciones.

## Estructura del Proyecto

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

El backend está construido utilizando **Serverless Framework** y **TypeScript**. Consiste en varias funciones controladoras que interactúan con una tabla de **DynamoDB**:

- **createItem.ts**: Maneja la creación de nuevos elementos.
- **readItem.ts**: Recupera elementos según su ID.
- **updateItem.ts**: Actualiza los elementos existentes.
- **deleteItem.ts**: Elimina elementos según su ID.

### Configuración

1. Navegue hasta el directorio `backend`.
2. Instale las dependencias: `npm install`.
3. Despliegue el backend: `serverless deploy`.

## Frontend

La interfaz está construida utilizando **Next.js** y **TypeScript**. Proporciona una UI para realizar operaciones CRUD:

- **index.tsx**: Punto de entrada principal con enlaces a operaciones CRUD.
- **create.tsx**: Formulario para crear nuevos elementos.
- **read.tsx**: Muestra elementos de la base de datos.
- **update.tsx**: Formulario para actualizar elementos existentes.
- **delete.tsx**: Interfaz para eliminar elementos.

### Configuración

1. Navegue hasta el directorio `frontend`.
2. Instale las dependencias: `npm install`.
3. Inicie el servidor de desarrollo: `npm run dev`.

## Repositorio de GitHub

Este proyecto se gestiona utilizando Git. Siga estos pasos para configurar su repositorio:

1. Inicialice un nuevo repositorio de Git: `git init`.
2. Agregue el origen remoto: `git remote add origin <su-repo-url>`.
3. Cree una nueva rama para funciones: `git checkout -b feature/<feature-name>`.
4. Confirme sus cambios: `git commit -m "Su mensaje de confirmación"`.
5. Empuje su rama: `git push origin feature/<feature-name>`.
6. Cree una solicitud de extracción en GitHub para fusionar sus cambios en la rama principal.

## Licencia

Este proyecto está bajo la licencia **MIT**. Consulte el archivo `LICENSE` para obtener más detalles.
