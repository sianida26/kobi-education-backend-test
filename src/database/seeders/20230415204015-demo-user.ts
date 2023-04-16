import { QueryInterface, DataTypes, QueryTypes } from "sequelize";
import bcrypt from "bcrypt";
import User from "../models/user.model";

module.exports = {
	up: (queryInterface: QueryInterface): Promise<void> =>
		queryInterface.sequelize.transaction(async (transaction) => {
			//Inserts user with username "coba" and hashed password "coba123"
			await queryInterface.insert(new User(), "users", {
				username: "coba",
				password: await bcrypt.hash("coba123", 10),
			});
		}),

	down: (queryInterface: QueryInterface): Promise<void> =>
		queryInterface.sequelize.transaction(async (transaction) => {
			await queryInterface.sequelize.query(
				`DELETE FROM users WHERE username = 'XXXX'`,
				{
					type: QueryTypes.DELETE,
					transaction,
				}
			);
		}),
};
