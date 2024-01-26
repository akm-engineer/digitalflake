import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.js";
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB is connected"))

  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.use("/api/user", userRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({ success: false, statusCode, message });
});

app.listen(8000, () => {
  console.log("Server is running on 8000");
});
