import Question from "../database/models/question.model";
import User from "../database/models/user.model";
import UserAnswer from "../database/models/userAnswer.model";

export default class AnswerService {
	async updateAnswer(user: User, questionId: number, answer: string) {
		const instance = await UserAnswer.findOne({
			where: {
				questionId,
				userId: user.id,
			},
		});

        const question = await Question.findByPk(questionId);
        if (question === null) throw new Error("Question not found");

        if (question.questionType === "multiple choice"){
            if (!question.optionsArray.includes(answer)) throw new Error("Invalid answer");
        }

		if (instance === null) {
			await UserAnswer.create({
				user,
				userId: user.id,
				questionId,
				answer,
			});
		} else {
			instance.answer = answer;
			instance.save();
		}
	}

	async getUserAnswers(user: User) {
		const questions = await Question.findAll({
			order: [["id", "ASC"]],
		});

		const answers = await UserAnswer.findAll({
			where: {
				userId: user.id,
			},
		});

		const answersMap = new Map(
			answers.map((answer) => [answer.questionId, answer.answer])
		);

		return questions.map((question) => ({
			questionId: question.id,
			answer: answersMap.get(question.id) || null,
		}));
	}
}
