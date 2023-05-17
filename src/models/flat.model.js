import mongoose, { SchemaType } from "mongoose";

const { Schema } = mongoose;

const FlatSchema = new Schema(
  {
    number: { type: String, required: true },
    flat: { type: String, required: true },
    price: { type: String, required: true },
    current_roomer: { type: Schema.Types.ObjectId, ref: "Roomer" },
    busy: { type: Boolean, default: false },
    building: { type: Schema.Types.ObjectId, ref: "Building" },
  },
  { timestamps: true, versionKey: false }
);

export const Flat = mongoose.model("Flat", FlatSchema, "flats");
