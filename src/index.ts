// Modules
import express = require('express');
import path = require('path');
import { sync } from './models/index';
require('./dbConnection');
const routes = require('./routes');

// sync();
// Server
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.static(path.join(__dirname, '../src/client/build')));
app.use(express.json());
app.use('/', routes);

// DB

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
