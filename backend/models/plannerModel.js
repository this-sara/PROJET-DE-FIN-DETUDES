import mongoose from "mongoose";

const plannerSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true},
});

const plannerModel=mongoose.models.planners || mongoose.model("planners",plannerSchema)

export default plannerModel;