import mongoose from "mongoose";


export const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL as string)
        console.log('🤝 MongoDb Connected');

    }catch (err){
        console.log('MongoDb Connected Failed');
    }
}