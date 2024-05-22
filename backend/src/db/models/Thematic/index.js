import mongoose from "mongoose";

import { CONTENT_TYPES_ENUM } from "../../../constants";
import { checkDistinct } from "../../../utils";

const thematicSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    contentTypes: {
      type: [String],
      required: true,
      validate: {
        validator: (contentTypes) => {
          if (!contentTypes.length || !checkDistinct(contentTypes)) {
            return false;
          }

          return contentTypes.every((ct) => CONTENT_TYPES_ENUM.includes(ct));
        },
        message: `The contentTypes field must have one of these values: ${CONTENT_TYPES_ENUM.join(
          ", "
        )}`,
      },
    },
    coverImage: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Thematic = mongoose.model("Thematic", thematicSchema);
