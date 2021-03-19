import express = require('express');
import { Request, Response } from 'express';
require('dotenv').config();
import { Sequelize } from 'sequelize';

const app = express();
const PORT = process.env.PORT || 5000;

// configure database
const sqlserver = new Sequelize(
  process.env.DATABASE!,
  process.env.USERNAME!,
  process.env.PASSWORD!,
  {
    host: 'remotemysql.com',
    dialect: 'mysql',
    port: 3306,
  }
);

const connect = async () => {
  try {
    await sqlserver.authenticate();
    console.log('connection successful');
  } catch (error) {
    console.error('Unable to connect to the database', error);
  }
};

connect();

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('benis');
  console.log('sent');
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
