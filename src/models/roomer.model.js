import mongoose from "mongoose";

const { Schema } = mongoose;

const RoomerSchema = new Schema(
  {
    apartment_number: { type: String, required: true },
    name: { type: String, required: true },
    last_name: { type: String, required: true },
    dni: { type: String, required: true },
    phone_number: { type: String, required: true },
    amount_paid: { type: String, required: true },
    admission_date: { type: String, required: true },
    expires_date: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export const Roomer = mongoose.model("Roomer", RoomerSchema, "roomers");
