import jwt from "jsonwebtoken";

import { User } from "../../../db/models/User";
import { ENV } from "../../../constants";

export async function login(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({ message: "This user does not exist" });
  }

  if (user.password !== password) {
    return res
      .status(401)
      .send({ message: "The data provided is not correct" });
  }

  const token = jwt.sign({ userId: user._id }, ENV.JWT_SECRET, {
    expiresIn: "3h",
  });

  return res.status(200).json({ user, token });
}

export async function signUp(req, res) {
  const { username, email, role, password } = req.body;

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (user) {
    return res.status(409).send({ message: "This user already exists" });
  }

  const newUser = await User.create({
    username,
    email,
    role,
    password,
  });

  return res.status(200).send(newUser);
}

export async function me(req, res) {
  const { userId } = req;

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).send({ message: "This user does not exist" });
  }

  return res.status(200).send(user);
}

export async function getUserById(req, res) {
  const { id } = req.params;

  const user = await User.findById(id);
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  return res.status(200).send(user);
}
