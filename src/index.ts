// Modules
import express from 'express';
import path = require('path');
import sequelize from './dbConnection';
import { signUpRouter } from './routes/signUp';
import { signInRouter } from './routes/signIn';
import { currentUserRouter} from './routes/currentUser';

// sequelize.sync({ force: true });

// Server
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.static(path.join(__dirname, '../src/client/build')));
app.use(express.json());

// Routes
app.use(signUpRouter);
app.use(signInRouter);
app.use(currentUserRouter);

// DB

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
