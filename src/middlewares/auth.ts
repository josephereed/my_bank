import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
require('dotenv').config();

const auth = (req: Request, res: Response, next: Function) => {
  try {
    const token = req.headers['authorization'];
    if (!token) res.send({ msg: 'No token' }).status(400);
    const decoded = jwt.verify(token!, process.env.SECRET_KEY as string);
    if (decoded) {
      req.body.cust_username = decoded;
      next();
    } else {
      res.send({ msg: decoded }).status(401);
    }
  } catch (error) {
    res.status(401).send({ msg: 'Unauthorized', error: error.message });
  }
  // Get token
};

export default auth;
