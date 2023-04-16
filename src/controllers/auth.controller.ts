import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../database/models/user.model";

export default class AuthController {
	async login(req: Request, res: Response) {
		try {
			const { username, password } = req.body;

            //add validation here
            if (!username || !password) {
                res.status(400).json({ error: "Invalid username or password" });
				return;
			}

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

    async register(req: Request, res: Response): Promise<void> {
        try {
          const { username, password } = req.body;
    
          // Check if user with given email already exists
          const userExists = await User.findOne({ where: { username } });
    
          // If user exists, send an error response
          if (userExists) {
            res.status(409).json({ error: 'User already exists' });
            return;
          }
    
          // Hash the password using bcrypt
          const passwordHash = await bcrypt.hash(password, 10);
    
          // Create a new user in the database
          const newUser = await User.create({ username, password: passwordHash });
    
          // Generate a JWT token for the new user
          const token = jwt.sign({ userId: newUser.id }, process.env.APP_KEY || "some-secret-key");
    
          // Send a success response with the JWT token
          res.json({ token });
        } catch (error: any) {
          // Handle any unexpected errors
          console.error(error);
          res.status(500).json({ message: error.message });
        }
      }    
}
