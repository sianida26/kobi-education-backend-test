import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../database/models/user.model";

export default class AuthController {
	async login(req: Request, res: Response) {
		try {
			const { username, password } = req.body;

			// Find the user with the given email
			const user = await User.findOne({ where: { username } });

			// If user not found, send an error response
			if (!user) {
				res.status(401).json({ error: "Invalid username or password" });
				return;
			}

			// Verify the user's password
			const passwordMatch = await bcrypt.compare(password, user.password);

			// If password doesn't match, send an error response
			if (!passwordMatch) {
				res.status(401).json({ error: "Invalid username or password" });
				return;
			}

			// Generate a JWT token for the authenticated user
			const token = jwt.sign(
				{ userId: user.id },
				process.env.APP_KEY || "some-secret-key"
			);

			// Send a success response with the JWT token
			res.json({ token });
		} catch (error) {
			// Handle any unexpected errors
			console.error(error);
			res.status(500).json({ error: "Internal server error" });
		}
	}
}
