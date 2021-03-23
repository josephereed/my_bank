import Sequelize = require('sequelize');
import { sequelize } from '../dbConnection';

const Account = sequelize.define(
  'account',
  {
    branch_code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    acct_no: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cust_no: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    acct_type_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    acct_balance: {
      type: Sequelize.DECIMAL,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Account;
