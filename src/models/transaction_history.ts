import Sequelize = require('sequelize');
import sequelize from '../dbConnection';

const Transaction = sequelize.define(
  'transaction_history',
  {
    trans_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
    branch_code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    acct_no: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    trans_type_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    trans_post_date: {
      // Might present an issue
      type: Sequelize.DATE,
      allowNull: false,
    },
    trans_desc: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    trans_amount: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Transaction;
