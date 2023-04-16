import { QueryInterface, DataTypes, QueryTypes } from "sequelize";
import bcrypt from "bcrypt";

const questions = [
	{
		questionType: "multiple choice",
		question: "What is the woman from?",
		options: JSON.stringify(["Germany", "Russia", "Australia", "Indonesia"])
	},
	{
		questionType: "multiple choice",
		question: "The woman says that you can travel from Croatia to Germany in two hours by",
		options: JSON.stringify(["Germany", "Russia", "Australia", "Indonesia"])
	},
	{
		questionType: "text field",
		question: "Name: Elisabeth ....",
	},
	{
		questionType: "text field",
		question: "Address: ....",
	},
	{
		questionType: "text field",
		question: "Policy Number: ....",
	},
	{
		questionType: "text field",
		question: "Traffic lights ...",
	},
	{
		questionType: "text field",
		question: "Petrol station ...",
	},
	{
		questionType: "text field",
		question: "Blue van ...",
	},
	{
		questionType: "text field",
		question: "What end of the market are the properties?",
	},
	{
		questionType: "text field",
		question: "What does the speaker compare buying houses with?",
	},
	{
		questionType: "text field",
		question: "How can you ask the speaker a question?",
	},
]

module.exports = {
	up: (queryInterface: QueryInterface): Promise<void> =>
		queryInterface.sequelize.transaction(async (transaction) => {
			await queryInterface.bulkInsert("Questions", questions);
		}),

	down: (queryInterface: QueryInterface): Promise<void> =>
		queryInterface.dropTable("Questions"),
};
