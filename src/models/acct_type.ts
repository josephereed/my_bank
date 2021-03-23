import Sequelize = require('sequelize');

import { sequelize } from '../dbConnection';

const Acct_type = sequelize.define('acct_type', {
  acct_type_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  acct_type_desc: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  acct_type_interest_rate: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Acct_type;