## Node Express Typescript Prisma Boilerplate

🦄 Starter template for your Express Prisma MySQL API

## 🍔 Stack Specs

- Node.js
- Express
- TypeScript
- Prisma
- MySQL

## 🧬 Development

- Clone the repository

```
git clone https://github.com/mcnaveen/node-express-prisma-boilerplate nepb
```
- Cd into the project directory
```
cd nepb
```

- Install dependencies

```
yarn install
```

- Create a Database in MySQL (or) You can use GUI to create a database

```
mysql> CREATE DATABASE express;
```

- Copy the `.env.sample` file as `.env`

```
cp .env.sample .env
```

- Edit the MySQL Details in the `.env` file

```
DATABASE_URL="mysql://USERNAME:PASSWORD@localhost:3306/DBNAME?schema=public"
```

- Push the Prisma Schema into Database

```
npx prisma migrate dev
```

- Run the development server

```
yarn dev
```

## 🚀 Production Build

- Run the production build

```
yarn build
```

- Start the production server

```
yarn start
```

> Your production build is available on `dist` folder

