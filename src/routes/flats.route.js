import express from "express";
import { Flat } from "../models/flat.model.js";

export const flatsRouter = express.Router();

flatsRouter.get("/flats", async (req, res) => {
  const flats = await Flat.find();
  res.json(flats);
});

flatsRouter.post("/flat", async (req, res) => {
  const { number, flat, price, current_roomer, busy, building } = req.body;
  const foundFlat = await Flat.findOne({ number, building });
  if (foundFlat) {
    return res.send("flat is already exist");
  }
  const newFlat = new Flat({
    number,
    flat,
    price,
    current_roomer,
    busy,
    building,
  });
  await newFlat.save();
  res.send("flat created successfully");
});

flatsRouter.delete("/flat/:id", async (req, res) => {
  await Flat.deleteOne({ _id: req.params.id });
  res.send("Flat deleted successfully");
});
