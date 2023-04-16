import express, { Request, Response, NextFunction } from "express"
import dotenv from "dotenv"
import cors from "cors"
import database from "./src/database/database";
import appRouter from "./src/routes";
import errorMiddleware from "./src/middleware/error.middleware";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

//Test database connection
database.authenticate()
  .then(() => console.log('Database connection has been established successfully'))
  .catch(err => console.log('Unable to connect to the database:', err))

app.use('/api/v1', appRouter)

app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});