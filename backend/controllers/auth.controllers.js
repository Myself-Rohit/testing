import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateTokens.js";
export const signupUser = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      throw new Error("All fields are required!");
    }

    const isUser = await User.findOne({ userName });
    if (isUser) {
      throw new Error("User already exist!");
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = new User({
      userName,
      password: passwordHash,
    });

    await user.save();
    const { password: pass, ...rest } = user._doc;
    const token = await generateToken(res, user._id);
    if (!token) {
      throw new Error("Something went wrong!");
    }
    res.cookie("accessTokens", token, { secure: true, httpOnly: true });
    res.status(201).send(rest);
  } catch (error) {
    res.status(400).json({ message: error?.message });
  }
};

export const signinUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      throw new Error("All fields are required!");
    }
    const user = await User.findOne({ userName });
    if (!user) {
      throw new Error("User not found");
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      throw new Error("Invalid credentials!");
    }
    const { password: pass, ...rest } = user._doc;
    const token = await generateToken(res, user._id);
    if (!token) {
      throw new Error("Something went wrong!");
    }
    res.cookie("accessTokens", token, { secure: true, httpOnly: true });
    res.status(200).send(rest);
  } catch (error) {
    res.status(400).json({ message: error?.message });
  }
};
