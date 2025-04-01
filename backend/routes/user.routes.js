import express from "express";
import { updateUser } from "../controllers/user.controllers.js";
import verifyToken from "../utils/verifyToken.js";
import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.patch("/update", verifyToken, upload.single("image"), updateUser);

export default router;
