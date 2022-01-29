import express from 'express';
import router from './router';
import path from 'path';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', router);
