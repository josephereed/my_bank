import path = require('path');
import { Request, Response } from 'express';

const routes = require('express').Router();
import { Customer, CustomerInstance } from './models/customer';

routes.get('/ping', (req: Request, res: Response) => {
  res.send('Pong');
});

// routes.get('/', (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, '../src/client/build/index.html'));
// });

routes.post('/register', async (req: Request, res: Response) => {
  // Check if user already exists
  const matchedUser = await Customer.findOne<CustomerInstance>({
    where: { cust_username: req.username },
  });
  // If user exists [], else create row in database
  if (!matchedUser) {
    const newCustomer = Customer.build<CustomerInstance>({
      branch_code: req.branchCode,
      cust_username: req.username,
      cust_password: req.password,
      cust_title: req.title,
      cust_givenname: req.givenName,
      cust_surname: req.surname,
      cust_address1: req.address1,
      cust_address2: req.address2!,
      cust_city: req.city,
      cust_state: req.state,
      cust_zip: req.zip,
      cust_email: req.email!,
    });
    console.log(newCustomer instanceof Customer);
    console.log(newCustomer.cust_givenname);
    res.send(newCustomer);
  }
});

module.exports = routes;
