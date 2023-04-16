import { QueryInterface, DataTypes, QueryTypes } from "sequelize";

module.exports = {
	up: (queryInterface: QueryInterface): Promise<void> =>
		queryInterface.sequelize.transaction(async (transaction) => {
			await queryInterface.createTable("Questions", {
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: DataTypes.INTEGER,
					unique: true,
				},
				questionType: {
					type: DataTypes.ENUM("multiple choice", "text field"),
					allowNull: false,
				},
				question: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				options: {
					type: DataTypes.STRING,
					allowNull: true,
				}
			});
		}),

	down: (queryInterface: QueryInterface): Promise<void> =>
		queryInterface.dropTable("Questions"),
};
