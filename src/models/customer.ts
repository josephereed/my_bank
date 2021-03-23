// import base module
import Sequelize = require('sequelize');

// import created connection
import { sequelize } from '../dbConnection';

const Customer = sequelize.define(
  'customer',
  {
    cust_no: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    branch_code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cust_username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cust_password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cust_email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    cust_title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cust_givenname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cust_surname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cust_address1: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cust_address2: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    cust_city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cust_zip: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cust_state: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Customer;
