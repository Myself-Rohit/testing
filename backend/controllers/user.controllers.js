import User from "../models/user.model.js";

export const updateUser = async (req, res) => {
  try {
    const { userName, password, photo } = req.body;
    console.log(photo);
    const userId = req.user;
    if (!userName || !password) {
      throw new Error("All field required!");
    }

    const updatedUser = await User.findByIdAndUpdate(userId, {
      userName,
      password,
      photo,
    });

    res
      .status(200)
      .json({ message: "updated successfully", data: updatedUser });
  } catch (error) {
    res.status(400).json({ message: error?.message });
  }
};
