import { QueryInterface, DataTypes, QueryTypes } from "sequelize";
import bcrypt from "bcrypt"

module.exports = {
	up: (queryInterface: QueryInterface): Promise<void> =>
		queryInterface.sequelize.transaction(async (transaction) => {
			await queryInterface.bulkInsert("Users", [{
        username: "coba",
        password: await bcrypt.hash("coba123", 10),
      }]);
		}),

	down: (queryInterface: QueryInterface): Promise<void> =>
		queryInterface.dropTable("Users"),
};
