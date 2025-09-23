import {Request, Response, NextFunction} from 'express';


export const errorHandler = (
    err : Error,
    req : Request,
    res : Response,
    next : NextFunction
) => {
    console.log(err.stack);
    
    const statusCode = (err as any).statusCode || 500;
    const message = err.message || 'Internal Server Error';
    
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
}