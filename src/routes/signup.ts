import path = require('path');
import { Request, Response } from 'express';

const router = require('express').Router();
import { Customer, CustomerInstance } from '../models/customer';

router.get('/ping', (req: Request, res: Response) => {
  res.send('Pong');
});

router.post('/register', async (req: Request, res: Response) => {
  // Check if user already exists
  const matchedUser = await Customer.findOne<CustomerInstance>({
    where: { cust_username: req.body.username },
  });
  // If user exists [], else create row in database
  if (!matchedUser) {
    try {
      const newCustomer = Customer.build<CustomerInstance>({
        branch_code: req.body.branchCode,
        cust_username: req.body.username,
        cust_password: req.body.password,
        cust_title: req.body.title,
        cust_givenname: req.body.givenName,
        cust_surname: req.body.surname,
        cust_address1: req.body.address1,
        cust_address2: req.body.address2!,
        cust_city: req.body.city,
        cust_state: req.body.state,
        cust_zip: req.body.zip,
        cust_email: req.body.email!,
      });
      await newCustomer.save();
      res.send(newCustomer);
      console.log(newCustomer instanceof Customer);
      console.log(newCustomer.cust_givenname);
    } catch (error) {
      res.send(error);
    }
  } else {
    res.send('This user already exists');
  }
});

export { router as signUpRouter };
