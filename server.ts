import express, {Express} from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {connectDB} from './Databases/db';
import mainRouter from './Routers/main.Router';
dotenv.config({path: './config/.env'});

const app: Express = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());


//router
app.use('/api/v1', mainRouter);



connectDB();

const PORT = process.env.PORT || 5001;
app.listen(PORT, async ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
} )