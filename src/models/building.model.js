import mongoose from "mongoose";

const { Schema } = mongoose;

const BuildingSchema = new Schema(
  {
    title: { type: String, required: true },
    address: { type: String, required: true },
    flats: {
      type: [{ type: Schema.Types.ObjectId, ref: "Flat" }],
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export const Building = mongoose.model("Building", BuildingSchema, "buildings");
