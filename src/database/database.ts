import { Sequelize } from 'sequelize-typescript';
import config from './config';

import User from "./models/user.model";
import UserAnswer from "./models/userAnswer.model";
import Question from "./models/question.model";

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
    models: [User, UserAnswer, Question]
  },
);

export default sequelize;
