import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../dbConnection';

// Attributes for stricter typechecking
interface AcctTypeAttributes {
  acct_type_id: string;
  acct_type_desc: string;
  acct_type_interest_rate: string;
}

// OptionalAttributes
interface AcctTypeCreationAttributes
  extends Optional<AcctTypeAttributes, 'acct_type_interest_rate'> {}

// Define interface for the model
interface AcctTypeInstance
  extends Model<AcctTypeAttributes, AcctTypeCreationAttributes>,
    AcctTypeAttributes {}

const Acct_type = sequelize.define<AcctTypeInstance>(
  'acct_type',
  {
    acct_type_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    acct_type_desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    acct_type_interest_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Acct_type;
