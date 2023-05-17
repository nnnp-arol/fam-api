import express from "express";
import { Building } from "../models/building.model.js";

export const buildingRouter = express.Router();

buildingRouter.get("/buildings", async (req, res) => {
  const buildings = await Building.find();
  res.json(buildings);
});

buildingRouter.post("/building", async (req, res) => {
  const { title, address, flats } = req.body;
  const foundBuilding = await Building.findOne({ title });
  if (foundBuilding) {
    return res.send("building is already exist");
  }
  const newBuilding = new Building({
    title,
    address,
    flats,
  });
  await newBuilding.save();
  res.send("building created successfully");
});

buildingRouter.delete("/building/:id", async (req, res) => {
  await Building.deleteOne({ _id: req.params.id });
  res.send("Building deleted successfully");
});
