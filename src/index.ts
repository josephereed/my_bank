// Modules
import express = require('express');
import path = require('path');
import { Sequelize } from 'sequelize';
require('dotenv').config();
require('./routes');
require('./dbConnection');

// Server
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.static(path.join(__dirname, '../src/client/build')));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
