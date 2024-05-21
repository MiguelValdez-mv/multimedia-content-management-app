import mongoose from "mongoose";

import { CONTENT_TYPES_ENUM } from "../../../constants";

const contentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    value: { type: String, required: true },
    type: { type: String, required: true, enum: CONTENT_TYPES_ENUM },
    thematicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thematic",
      required: true,
    },
    createdByUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Content = mongoose.model("Content", contentSchema);
