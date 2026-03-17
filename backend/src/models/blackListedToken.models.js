import mongoose from "mongoose";
const blackListedTokenSchema = new mongoose.Schema(
  {
    blackListToken: {
      type: String,
      required: [true, "token is required"],
    },
    expiresAt: {
      type: Date,
      required: [true, "Expire time is necessary"],
      index: { expires: 0 },
    },
  },
  {
    timestamps: true,
  },
);

const blackListedToken = new mongoose.model(
  "blackListedToken",
  blackListedTokenSchema,
);
export default blackListedToken;
