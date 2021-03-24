import { CustomerAttributes } from '../models/customer';
declare global {
  declare namespace Express {
    export interface Request {
      username?: CustomerAttributes['cust_username'];
    }
  }
}
