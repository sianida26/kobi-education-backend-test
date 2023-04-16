import express from 'express';
import PracticeController from '../controllers/practice.controller';
import authMiddleware from '../middleware/auth.middleware';

const router = express.Router();
const practiceController = new PracticeController();

router.use(authMiddleware);

router.get("/getQuestions", practiceController.getQuestions)
router.post("/updateAnswer", practiceController.updateAnswer)
router.get("/answers", practiceController.getAnswers)

export default router;
