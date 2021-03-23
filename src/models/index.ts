import sequelize from '../dbConnection';

export const sync = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('sync executed');
  } catch (error) {
    console.error(error);
  }
};


