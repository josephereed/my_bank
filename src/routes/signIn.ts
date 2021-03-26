import { Request, Response } from 'express';
import { Customer, CustomerInstance } from '../models/customer';

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
      try {
        const match = await Customer.prototype.validatePassword(
          matchedUser,
          req.body.password
        );
        res.send(match);
      } catch (error) {
        res.send(error);
      }
      res.send();
    }
  } catch (error) {
    res.send(error);
  }
});

export { router as signInRouter };
