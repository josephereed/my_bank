import sequelize from '../dbConnection';

import Branch from './branch';
import { Customer } from './customer';
import Acct_type from './acct_type';
import Account from './account';
import Transaction from './transaction_history';
import TransactionType from './transaction_type';

Branch.hasMany(Customer);
Customer.hasMany(Account);
Account.hasMany(Transaction);
Account.hasOne(Acct_type)
Transaction.hasOne(TransactionType);

export const sync = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('sync executed');
  } catch (error) {
    console.error(error);
  }
};
