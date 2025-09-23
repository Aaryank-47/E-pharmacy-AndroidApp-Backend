import {Router} from "express";
import userRouter from './user.Routers';
const mainRouter = Router();

mainRouter.use('/users',userRouter);


export default mainRouter;