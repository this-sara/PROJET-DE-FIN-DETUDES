
import plannerModel from "../models/plannerModel.js";
import fs from 'fs';
import { unlink } from "fs";


//add planner item
const addPlanner=async(req,res)=>{
    let image_filename=`${req.file.filename}`;
    
    const planner=new plannerModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:image_filename,
        category:req.body.category,
    })
    try{
        planner.save();
        res.json({success:true,message:"Planner Added"})
    } catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}
//all planner list
const listPlanner=async(req,res)=>{
   try{
    const planners= await plannerModel.find({});
    res.json({success:true,data:planners})
   }catch(error){
    console.log(error);
    res.json({success:false,message:"Error"})
   }
}
//remove food item
const removePlanner=async(req,res)=>{
    try{
        const planner=await plannerModel.findById(req.body.id);
        fs.unlink(`uploads/${planner.image}`,()=>{})
        await plannerModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Planner Removed"})

    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

export {addPlanner,listPlanner,removePlanner}