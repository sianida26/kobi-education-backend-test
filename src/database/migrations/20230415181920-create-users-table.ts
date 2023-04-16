import { QueryInterface, DataTypes, QueryTypes } from "sequelize";

module.exports = {
	up: (queryInterface: QueryInterface): Promise<void> =>
		queryInterface.sequelize.transaction(async (transaction) => {
			await queryInterface.createTable("users", {
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: DataTypes.INTEGER,
					unique: true,
				},
				username: {
					allowNull: false,
					type: DataTypes.STRING,
				},
				password: {
					allowNull: false,
					type: DataTypes.STRING,
				},
			});
		}),

	down: (queryInterface: QueryInterface): Promise<void> =>
		queryInterface.dropTable("users"),
};
