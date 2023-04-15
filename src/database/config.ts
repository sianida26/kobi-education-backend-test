import dotenv from "dotenv";
import { Dialect } from "sequelize";

dotenv.config();

//exports sequelize config
export default {
	development: {
		username: process.env.DB_USERNAME || "root",
		password: process.env.DB_PASSWORD || "root",
		database: process.env.DB_NAME || "",
		host: process.env.DB_HOST || "",
		port: process.env.DB_PORT || "3306",
		dialect: "mysql" as Dialect,
        logging: true,
	},
	test: {
		username: process.env.DB_USERNAME || "root",
		password: process.env.DB_PASSWORD || "root",
		database: process.env.DB_NAME || "",
		host: process.env.DB_HOST || "",
		port: process.env.DB_PORT || "3306",
		dialect: "mysql" as Dialect,
		logging: false,
	},
	production: {
		username: process.env.DB_USERNAME || "root",
		password: process.env.DB_PASSWORD || "root",
		database: process.env.DB_NAME || "",
		host: process.env.DB_HOST || "",
		port: process.env.DB_PORT || "3306",
		dialect: "mysql" as Dialect,
        logging: false,
		ssl: true,
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
			},
		},
	},
};
