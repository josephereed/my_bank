import sequelize from '../dbConnection';
import Sequelize = require('sequelize');
import { Transaction } from 'sequelize';

const TransactionType = sequelize.define(
  'transaction_type',
  {
    trans_type_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    trans_type_desc: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default TransactionType;
