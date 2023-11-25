import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { studentRoutes } from './app/moduler/student/student.route';

//parsers
app.use(express.json());
app.use(cors());

// application routes

app.use('/api/v1/students', studentRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('controller function');
};

app.get('/', getAController);

export default app;
