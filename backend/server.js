import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import plannerRouter from "./routes/plannerRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express()
const port = 4001

//middleware
app.use(express.json())
app.use(cors())

//db connection connectDB
connectDB();

//api endpoints
app.use("/api/planner",plannerRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

