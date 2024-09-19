import express from "express";
import { addToCart,getCart,removeFromCart} from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";
const cartRouter=express.Router();
//Image storage engin

// const storage=multer.diskStorage({
//     destination:"uploads",
//     filename:(req,file,cb)=>{
//        return cb(null,`${Date.now()}${file.originalname}`) 
//     }
// })

// const upload=multer({storage:storage})
cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.post("/remove",authMiddleware,removeFromCart)
cartRouter.post("/get",authMiddleware,getCart)



export default cartRouter;