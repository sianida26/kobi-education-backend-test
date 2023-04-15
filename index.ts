import express, { Request, Response, NextFunction } from "express"
import dotenv from "dotenv"
import cors from "cors"

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
})

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});