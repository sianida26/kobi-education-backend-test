import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../database/models/user.model";

const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res
			.status(401)
			.json({ message: "Authorization header is missing" });
	}

	const token = authHeader.split(" ")[1];

	try {
		const decodedToken = jwt.verify(
			token,
			process.env.APP_KEY || "some-secret" as string
		) as { userId: string };
		const user = await User.findByPk(decodedToken.userId);

		if (!user) {
			return res
				.status(401)
				.json({ message: "Invalid authorization token" });
		}
		req.user = user;
		next();
	} catch (error) {
		return res.status(401).json({ message: "Invalid authorization token" });
	}
};

export default authMiddleware;
