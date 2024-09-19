import express from "express";
import { addPlanner,listPlanner,removePlanner} from "../controllers/plannerController.js";
import multer from "multer"

const plannerRouter=express.Router();

//Image storage engin

const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
       return cb(null,`${Date.now()}${file.originalname}`) 
    }
})

const upload=multer({storage:storage})
plannerRouter.post("/add",upload.single("image"),addPlanner)
plannerRouter.get("/list",listPlanner)
plannerRouter.post("/remove",removePlanner)


export default plannerRouter;