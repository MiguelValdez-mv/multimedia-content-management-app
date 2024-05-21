import mongoose from "mongoose";

import { USER_ROLES, USER_ROLES_ENUM } from "../../../constants";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: USER_ROLES_ENUM, default: USER_ROLES.READER },

    // TODO: encrypt field
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
