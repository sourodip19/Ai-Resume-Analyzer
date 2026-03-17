import { Router } from "express";
import { authProtectRoute } from "../middleware/authProtectRoute.middleware.js";
import {
  signUp,
  login,
  logout,
  getMe,
} from "../controllers/auth.controllers.js";
const authRouter = Router();

/**
 * @routes post -> user/auth/signup
 */
authRouter.post("/signup", signUp);

/**
 * @routes post -> user/auth/login
 */
authRouter.post("/login", login);

/**
 * @routes post -> user/auth/logout
 */
authRouter.post("/logout", authProtectRoute, logout);

/**
 * @routes get -> user/auth/getMe
 */
authRouter.get("/getMe", authProtectRoute, getMe);

export default authRouter;
