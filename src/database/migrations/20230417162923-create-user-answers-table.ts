import { QueryInterface, DataTypes, QueryTypes } from "sequelize";

module.exports = {
	up: (queryInterface: QueryInterface): Promise<void> =>
		queryInterface.sequelize.transaction(async (transaction) => {
			await queryInterface.createTable("UserAnswers", {
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: DataTypes.INTEGER,
					unique: true,
				},
				userId: {
					type: DataTypes.INTEGER,
					allowNull: false,
					references: {
						model: {
							tableName: "Users",
						},
						key: "id"
					}
				},
				questionId: {
					type: DataTypes.INTEGER,
					allowNull: false,
					references: {
						model: {
							tableName: "Questions",
						},
						key: "id"
					}
				},
				answer: {
					allowNull: true,
					type: DataTypes.STRING,
				}
			});
		}),

	down: (queryInterface: QueryInterface): Promise<void> =>
		queryInterface.dropTable("UserAnswers"),
};
