import { DataTypes, Model } from 'sequelize';
import sequelize from '../dbConnection';

// Strict typechecking for attributes
interface BranchInstance extends Model {
  branch_code: string;
  branch_name: string;
  branch_address1: string;
  branch_address2: string;
  branch_city: string;
  branch_zip: string;
  branch_state: string;
}

// interface for model

const Branch = sequelize.define<BranchInstance>(
  'branches',
  {
    branch_code: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    branch_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    branch_address1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    branch_address2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    branch_city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    branch_zip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    branch_state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Branch;
