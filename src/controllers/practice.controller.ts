import * as yup from 'yup';
import { Request, Response } from "express";
import AnswerService from "../services/answer.service";

const answerService = new AnswerService()

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
}