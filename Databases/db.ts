import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({path: './config/.env'});

export const connectDB : ()=>Promise<void> =  async () =>{
    mongoose.connect(process.env.MONGO_URI as string,{
        dbName: 'e-pharmacy'
    }).then(()=>{
        console.log("MongoDB connected successfully");
    }).catch((error)=>{
        console.log("MongoDB connection error: ", error);
    })
}