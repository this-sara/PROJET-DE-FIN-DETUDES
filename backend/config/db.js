import mongoose from "mongoose";
export const connectDB=async()=>{
    await mongoose.connect('mongodb://localhost:27017/plannerecomerce').then(()=>console.log("DB Connected"));
}