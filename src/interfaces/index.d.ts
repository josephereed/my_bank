import { CustomerAttributes } from '../models/customer';
declare global {
  declare namespace Express {
    export interface Request {
      username: CustomerAttributes['cust_username'];
      branchCode: CustomerAttributes['branch_code'];
      password: CustomerAttributes['cust_password'];
      title: CustomerAttributes['cust_title'];
      givenName: CustomerAttributes['cust_givenname'];
      surname: CustomerAttributes['cust_surname'];
      address1: CustomerAttributes['cust_address1'];
      address2: CustomerAttributes['cust_address2'];
      city: CustomerAttributes['cust_city'];
      state: CustomerAttributes['cust_state'];
      zip: CustomerAttributes['cust_zip'];
      email: CustomerAttributes['cust_email'];
    }
  }
}
