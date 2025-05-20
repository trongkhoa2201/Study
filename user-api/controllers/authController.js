const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password, age } = req.body;

  try {
    const hanshed = await bcrypt.hash(password, 10);
    const user = User.create({ name, email, password: hanshed, age });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Email already exists or invalid input", error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: "Wrong password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });
  res.json({ token, user: { id: user._id, name: user.name, email: user.email, age: user.age } });
};

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  const { name, age } = req.body;
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { name, age },
    { new: true }
  ).select("-password");
  res.json(user);
};
