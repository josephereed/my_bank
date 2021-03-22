import express = require('express');
import { Request, Response } from 'express';
require('dotenv').config();
import { Sequelize } from 'sequelize';
import path = require('path')

const app = express();
const PORT = process.env.PORT || 5000;

// configure database
const sqlserver = new Sequelize(
  process.env.DATABASE!,
  process.env.REMOTEUSERNAME!,
  process.env.PASSWORD!,
  {
    host: 'remotemysql.com',
    dialect: 'mysql',
    port: 3306,
  }
);

// Setup CRA
app.use(express.static(path.join(__dirname, '../src/client/build'))) 

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
  res.sendFile(path.join(__dirname, '../src/client/build/index.html'))
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
