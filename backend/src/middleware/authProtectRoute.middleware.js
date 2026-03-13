import jwt from "jsonwebtoken";
import blackListedToken from "../models/blackListedToken.models.js";
export const authProtectRoute = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    const error = new Error("Token is invalid");
    error.statusCode = 400;
    next(error);
  }
  const blackList = await blackListedToken.findOne({ token });
  if (blackList) {
    const error = new Error("The token has been revoked");
    error.statusCode = 422;
    next(error);
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    next(error);
  }
};
