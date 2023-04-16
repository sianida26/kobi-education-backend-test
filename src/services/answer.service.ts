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
		const userAnswers = await UserAnswer.findAll({
			where: {
				userId: user.id,
			},
		});

		const answersMap = new Map(
			userAnswers.map((answer) => [answer.questionId, answer.answer])
		);

		const result = [];
		for (let i = 1; i <= 12; i++) {
			const answer = answersMap.get(i);
			result.push({
				questionId: i,
				answer: answer || null,
			});
		}

		return result;
	}
}
