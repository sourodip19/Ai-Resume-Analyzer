import cookieParser from "cookie-parser";
import express from "express";
import errorHandler from "./middleware/errorHandler.middleware.js";
import authRouter from "./routes/auth.routes.js";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

/**
 * @routes user routes for signup, login, logout, getMe
 * @description this is the inital part of the user routes
 */
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "API is healthy",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  });
});
app.use("/user/auth", authRouter);
app.use(errorHandler);
export default app;
