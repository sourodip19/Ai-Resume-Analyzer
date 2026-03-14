import cookieParser from "cookie-parser";
import express from "express";
import errorHandler from "./middleware/errorHandler.middleware.js";
import authRouter from "./routes/auth.routes.js";
const app = express();

app.use(express.json());
app.use(cookieParser());

/**
 * @routes user routes for signup, login, logout, getMe
 * @description this is the inital part of the user routes
 */
app.use("/user/auth", authRouter);
app.use(errorHandler);
export default app;
