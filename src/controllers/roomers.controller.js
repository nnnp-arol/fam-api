import { Roomer } from "../models/roomer.model.js";

export const getRoomers = async (req, res) => {
  const roomers = await Roomer.find();
  res.json(roomers);
};

export const postRoomer = async (req, res) => {
  const {
    apartment_number,
    name,
    last_name,
    dni,
    phone_number,
    amount_paid,
    admission_date,
    expires_date,
  } = req.body;
  const foundRoomer = await Roomer.findOne({ dni });
  if (foundRoomer) {
    return res.send("roomer is already exist");
  }
  const newRoomer = new Roomer({
    apartment_number,
    name,
    last_name,
    dni,
    phone_number,
    amount_paid,
    admission_date,
    expires_date,
  });
  await newRoomer.save();
  res.send("roomer created successfully");
};

export const deleteRoomer = async (req, res) => {
  console.log(req.params.id);
  await Roomer.deleteOne({ _id: req.params.id });
  res.send("Roomer deleted successfully");
};
