import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js";
import connectDB from "./src/config/connectDB.js";

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is up and running on port ${process.env.PORT}`);
  });
});
