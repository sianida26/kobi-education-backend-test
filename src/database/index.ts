import { Sequelize } from 'sequelize-typescript';
import sequelize from './database';

const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;
