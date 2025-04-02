import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const updateUser = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const userId = req.user;
    if (!userId) {
      res.status(404).json({ message: "User not found" });
    }
    if (!userName || !password) {
      throw new Error("All field required!");
    }

    const photoBase64 = req.file ? req.file.buffer.toString("base64") : null;
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const updatedUser = await User.findByIdAndUpdate(userId, {
      userName,
      password: passwordHash,
      photo: photoBase64,
    });
    const { password: pass, ...user } = updatedUser._doc;
    res.status(200).json({ message: "updated successfully", data: user });
  } catch (error) {
    res.status(400).json({ message: error?.message });
  }
};
