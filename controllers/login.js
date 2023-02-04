const Users = require("../models/Users");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  if (!user) return res.status(404).json({ message: "User not found" });

  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    return res.status(200).json(user);
  }

  return res.status(401).json({ message: "Invalid email or password" });
};

module.exports = login;
