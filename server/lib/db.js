import mongoose from "mongoose";

export const connectDB = async () => {
    try{

        mongoose.connection.on('connected', () => {
            console.log("DB connected successfully")
        })
        await mongoose.connect(`${process.env.MONGODB_URL}/chat-app`)
    }
    catch(err){
        console.log(err);
    }
}