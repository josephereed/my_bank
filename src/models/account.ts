import { Sequelize, Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../dbConnection';

// Declare interface for attributes for strict typechecking
interface AccountAttributes {
  branch_code: string;
  acct_no: string;
  cust_no: number;
  acct_type_id: string;
  acct_balance: number;
}

// Optional attributes
interface AccountCreationAttributes
  extends Optional<AccountAttributes, 'acct_balance'> {}

// Interface for the model
interface AccountInstance
  extends Model<AccountAttributes, AccountCreationAttributes>,
    AccountAttributes {}

const Account = sequelize.define<AccountInstance>(
  'account',
  {
    branch_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    acct_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cust_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    acct_type_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    acct_balance: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Account;
