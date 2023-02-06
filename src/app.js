import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import { dbConnect } from "./db/db.js";
import { roomersRouter } from "./routes/roomers.route.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
    allowedHeaders: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
app.use(morgan("tiny"));

app.use("/", roomersRouter);

app.listen(PORT, () => {
  try {
    dbConnect();
  } catch (error) {
    console.log(process.env.MONGODB_URI);
    console.warn(error);
  }
  console.log(`listen on port ${PORT}`);
});
