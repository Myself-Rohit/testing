import express from "express";
import connectDB from "./backend/config/database.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./backend/routes/auth.routes.js";
import userRoute from "./backend/routes/user.routes.js";
const app = express();
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 5001;

connectDB().then(() => {
  console.log("Database Connected!!");
  app.listen(port, () => {
    console.log(`app running at ${port}`);
  });
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
