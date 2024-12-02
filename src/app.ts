import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';

// const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);


app.get('/', (req: Request, res: Response) => {
  res.send('PH University Server Rnning 😎');
});


app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    error: { message: 'Route not found' },
    stack: null,
  });
});


export default app;
