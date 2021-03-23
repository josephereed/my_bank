import path = require('path');
import { Request, Response } from 'express';
const routes = require('express').Router();

routes.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../src/client/build/index.html'));
});

routes.post('/', (req: Request, res: Response) => {
  // Check if user already exists
  //const matchedUser = 
});

module.exports = routes;
