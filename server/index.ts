import express, { Request, Response } from 'express';
import cors from 'cors';

import projectsRouter from './routes/projects';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/projects', projectsRouter);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.on('error', e => console.error("Error", e));
