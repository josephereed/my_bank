// Modules
import express from 'express';
import path = require('path');
import sequelize from './dbConnection';
import { signUpRouter } from './routes/signup';

// sequelize.sync({ force: true });

// Server
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.static(path.join(__dirname, '../src/client/build')));
app.use(express.json());
app.use(signUpRouter);

// DB

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
