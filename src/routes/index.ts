import express from 'express';
import authRouter from './auth.route';
import practiceRouter from './practice.route';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/practice', practiceRouter)

export default router;
