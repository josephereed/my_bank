import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../dbConnection';

// Stricter typechecking on attributes
interface TransactionAttributes {
  trans_id: number;
  branch_code: string;
  acct_no: string;
  trans_type_id: string;
  trans_post_date: Date;
  trans_desc: string;
  trans_amount: number;
}

// Optional attributes
interface TransactionCreationAttributes
  extends Optional<TransactionAttributes, 'trans_desc'> {}

// Interface for the model
interface TransactionInstance
  extends Model<TransactionAttributes, TransactionCreationAttributes>,
    TransactionAttributes {}

const Transaction = sequelize.define<TransactionInstance>(
  'transaction_history',
  {
    trans_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    branch_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    acct_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trans_type_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trans_post_date: {
      // Might present an issue
      type: DataTypes.DATE,
      allowNull: false,
    },
    trans_desc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    trans_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Transaction;
