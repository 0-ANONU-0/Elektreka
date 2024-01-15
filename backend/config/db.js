import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => { //async because any method from mongoose model or mongoose itself returns a promise.
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(`Error: ${err.message}`);
        process.exit(1);
    }
 }; 

 export default connectDB;