import { Sequelize } from 'sequelize';

// configure database
export const sequelize = new Sequelize(
  process.env.DATABASE!,
  process.env.REMOTEUSERNAME!,
  process.env.PASSWORD!,
  {
    host: 'remotemysql.com',
    dialect: 'mysql',
    port: 3306,
  }
);

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('connection successful');
  } catch (error) {
    console.error('Unable to connect to the database', error);
  }
};

connect();

module.exports = sequelize