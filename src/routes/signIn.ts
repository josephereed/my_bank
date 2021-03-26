import { Request, Response } from 'express';
import { Customer, CustomerInstance } from '../models/customer';
import jwt from 'jsonwebtoken';
require('dotenv').config();

const router = require('express').Router();

router.post('/login', async (req: Request, res: Response) => {
  // Search for user
  try {
    const matchedUser = await Customer.findOne<CustomerInstance>({
      where: { cust_username: req.body.username },
    });
    // If user doesnt exist, return bad credentials
    if (!matchedUser) {
      res.send('Credentials not valid').status(401);
    } else {
      const match = await Customer.prototype.validatePassword(
        matchedUser,
        req.body.password
      );
      const accessToken = jwt.sign(
        { username: matchedUser.cust_username },
        <string>process.env.SECRET_KEY
      );
      res.send(accessToken);
    }
  } catch (error) {
    res.send(error);
  }
});

export { router as signInRouter };
