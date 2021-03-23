import { sequelize } from '../dbConnection';
import Sequelize = require('sequelize');

const Branch = sequelize.define('customer', {
  branch_code: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  branch_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  branch_address1: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  branch_address2: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  branch_city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  branch_zip: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  branch_state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Branch;