// import base module
import { Sequelize, Model, DataTypes, Optional, UUIDV4 } from 'sequelize';
import bcrypt from 'bcrypt';
// import created connection
import sequelize from '../dbConnection';

export interface CustomerAttributes {
  cust_no: number;
  branch_code: string;
  cust_username: string;
  cust_password: string;
  cust_email: string;
  cust_title: string;
  cust_givenname: string;
  cust_surname: string;
  cust_address1: string;
  cust_address2: string;
  cust_city: string;
  cust_zip: string;
  cust_state: string;
}

interface CustomerCreationAttributes
  extends Optional<CustomerAttributes, 'cust_no' | 'cust_email'> {}

export interface CustomerInstance
  extends Model<CustomerAttributes, CustomerCreationAttributes>,
    CustomerAttributes {}

export const Customer = sequelize.define<CustomerInstance>(
  'customers',
  {
    cust_no: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    branch_code: {
      type: DataTypes.STRING,
      allowNull: false,
      // references: {
      //   model: 'branches',
      //   key: 'branch_code',
      // },
    },
    cust_username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cust_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cust_email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cust_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cust_givenname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cust_surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cust_address1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cust_address2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cust_city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cust_zip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cust_state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

Customer.beforeCreate(async (user: CustomerInstance, options) => {
  const salt = await bcrypt.genSalt(10);
  user.cust_password = await bcrypt.hash(user.cust_password, salt);
});

Customer.prototype.validatePassword(
  async (user: CustomerInstance, password: String) => {
    return await bcrypt.compare(password, user.cust_password);
  }
);
