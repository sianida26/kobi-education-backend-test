import * as yup from 'yup';
import { Request, Response } from "express";
import AnswerService from "../services/answer.service";
import QuestionService from "../services/question.service";

const answerService = new AnswerService()
const questionService = new QuestionService()

export default class PracticeController {

    async updateAnswer(req: Request, res: Response) {
        const validationSchema = yup.object({
            questionId: yup.number().required().max(12),
            answer: yup.string().required().max(255),
        })

        try {
            const requestBody = req.body;
            await validationSchema.validate(requestBody);
            await answerService.updateAnswer(req.user!, requestBody.questionId, requestBody.answer);

            return res.json({
                message: "updated"
            });
        } catch (e: any){
            //show error
            res.status(500).json({
                message: e.message,
            })
        }
    }

    async getAnswers(req: Request, res: Response) {
        try {
            const answers = await answerService.getUserAnswers(req.user!);
            return res.json(answers);
        } catch (e: any){
            //show error
            res.status(500).json({
                message: e.message,
            })
        }
    }

    async getQuestions(req: Request, res: Response) {
        try {
            const questions = await questionService.getQuestions();
            return res.json(questions);
        } catch(e: any) {
            res.status(500).json({
                message: e.message,
            })
        }
    }    
}