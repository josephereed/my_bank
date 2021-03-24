import path = require('path');
import { Request, Response } from 'express';

const routes = require('express').Router();
import { Customer, CustomerInstance } from './models/customer';

routes.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../src/client/build/index.html'));
});

routes.post('/register', async (req: Request, res: Response) => {
  // Check if user already exists
  const matchedUser = await Customer.findOne<CustomerInstance>({
    where: { cust_username: req.username },
  });
});

export default routes;
