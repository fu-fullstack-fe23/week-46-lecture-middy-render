import express from 'express';
import authRouter from './routes/auth.js';
import 'dotenv/config';
import cors from 'cors';
import movieRouter from './routes/movies.js';

const app = express();
const PORT = process.env.PORT_NR || 3000;

app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);
app.use('/movies', movieRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});