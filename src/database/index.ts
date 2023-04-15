import { Sequelize } from 'sequelize-typescript';
import User from './models/user';
import sequelize from './database';

const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = User(sequelize, Sequelize);

export default db;
