import userModel from "../models/user.models.js";
import jwt from "jsonwebtoken";
import blackListedToken from "../models/blackListedToken.models.js";
export const signUp = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      const err = new Error("All fields are required");
      err.statusCode = 400;
      throw err;
    }
    const isUserExist = await userModel.findOne({
      $or: [{ email: email }, { username: username }],
    });
    if (existingUser) {
      if (isUserExist.username == username) {
        const err = new Error("username is taken ");
        err.statusCode = 400;
        throw err;
      }
      if (existingUser.email === email) {
        const err = new Error("email is already present");
        err.statusCode = 400;
        throw err;
      }
    }
    const user = await userModel.create({
      username,
      email,
      password,
    });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(201).json({
      success: true,
      message: "User signUp successful",
      user,
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const err = new Error("All fields are required");
      err.statusCode = 400;
      throw err;
    }
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      const err = new Error("user not found");
      err.statusCode = 404;
      throw err;
    }
    const isMatch = userModel.comparePassword(password);
    if (!isMatch) {
      const err = new Error("Password doesnot match");
      err.statusCode = 400;
      throw err;
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(201).json({
      success: true,
      message: "User login successful",
      user,
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      const error = new Error("No token provided");
      error.statusCode = 400;
      throw error;
    }
    const decoded = jwt.decode(token);
    const blackListToken = await blackListedToken.create({
      blackListtoken: token,
      expiresAt: new Date(decoded.exp * 1000),
    });
    res.clearCookie("token");
  } catch (error) {
    next(error);
  }
};

export const getMe = async (req, res, next) => {
  try {
    const userId = req.userId;
    const user = await userModel.findById(userId);
    if (!user) {
      const err = new Error("User not found");
      err.statusCode = 404;
      return next(err);
    }
    res.status(200).json({
      success: true,
      message: "This is your profile",
      user,
    });
  } catch (error) {
    next(error);
  }
};
