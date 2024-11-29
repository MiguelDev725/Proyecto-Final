import { createdAccessToken } from "../libs/jwt.js";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const TOKEN_SECRET = process.env.TOKEN_SECRET;

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    const userSaved = await newUser.save();
    const accessToken = await createdAccessToken({ id: userSaved._id });
    res.cookie("token", accessToken);
    res.status(201).json({ message: "Register Ok..." });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound) {
      return res.status(400).json({ message: "Email not found" });
    }
    const isValidPassword = await bcryptjs.compare(
      password,
      userFound.password
    );
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const accessToken = await createdAccessToken({ id: userFound._id });
    res.cookie("token", accessToken);
    res.status(200).json({ message: "Login Ok..." });
  } catch (error) {
    res.status(500).json({ message: Error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const veryfyToken = async (req, res) => {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    return res.status(401).json({ message: "No token provided" });
  }
  jwt.verify(accessToken, TOKEN_SECRET, async (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    const userFound = await User.findById(user.id);
    if (!userFound) {
      return res.status(401).json({ message: "User not found" });
    }
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};
