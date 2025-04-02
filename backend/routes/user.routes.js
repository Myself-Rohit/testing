import express from "express";
import { updateUser } from "../controllers/user.controllers.js";
import verifyToken from "../utils/verifyToken.js";
import multer from "multer";
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "backend/uploads/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + "-" + file.originalname);
//   },
// });

const storage = multer.memoryStorage();

const upload = multer({ storage });

const router = express.Router();

router.patch("/update", verifyToken, upload.single("photo"), updateUser);

export default router;
