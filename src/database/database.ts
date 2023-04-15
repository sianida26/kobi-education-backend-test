import { Sequelize } from 'sequelize-typescript';
import config from './config';

const env = (process.env.NODE_ENV as "development" | "production" | "test") || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect:  dbConfig.dialect,
    logging: dbConfig.logging,
  },
);

export default sequelize;
