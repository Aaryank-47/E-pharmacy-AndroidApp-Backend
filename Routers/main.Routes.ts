import {Router} from "express";
import userRouter from './user.Routes';
const mainRouter = Router();

mainRouter.use('/users',userRouter);


export default mainRouter;