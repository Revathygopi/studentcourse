import { Sequelize } from 'sequelize';


const DB_USERNAME = 'postgres';
const DB_PASSWORD = '12345678';
const DB_NAME = 'postgres';
const DB_HOST = 'localhost';
const DB_DIALECT = 'postgres';


const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  logging: true
});
const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); 
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Error creating database tables:', error);
  }
};

syncDatabase();

export { sequelize };
