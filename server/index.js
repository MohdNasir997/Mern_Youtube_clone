import express from "express";
import dotenv from "dotenv"
import { ConnectDB } from "./ConnectDB.js";
import UserRoute from './routes/users.js'
import CommentRoute from './routes/comments.js'
import VideoRoute from './routes/videos.js'
import AuthRoute from './routes/auth.js'
import cookieParser from "cookie-parser";
import cors from 'cors'
dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;
ConnectDB();
app.use(express.json());
app.use(cors({origin:process.env.HOST,credentials:true,}))
app.use(cookieParser())
app.use('/api/auth',AuthRoute)
app.use('/api/users',UserRoute);
app.use('/api/videos/',VideoRoute);
app.use('/api/comments',CommentRoute)
// error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
      success: false,
      status,
      message,
    });
  });  


app.listen(PORT,() => {
    console.log("listening to port:" + PORT);
})