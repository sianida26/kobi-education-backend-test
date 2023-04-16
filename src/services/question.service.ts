import Question from "../database/models/question.model";
import User from "../database/models/user.model";
import UserAnswer from "../database/models/userAnswer.model";

export default class QuestionService {
	async getQuestions() {
		return await Question.findAll()
	}
}
