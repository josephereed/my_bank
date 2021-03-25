import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../dbConnection';

// Stricter typechecking for attributes
interface TransactionTypeInstance extends Model {
  trans_type_id: string;
  trans_type_desc: string;
}

const TransactionType = sequelize.define<TransactionTypeInstance>(
  'transaction_types',
  {
    trans_type_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    trans_type_desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default TransactionType;
