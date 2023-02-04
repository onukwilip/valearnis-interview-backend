const Users = require("../models/Users");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  if (user) return res.status(400).json({ message: "User already exists..." });

  const genSalt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, genSalt);
  const createdUser = await Users.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  }).catch((e) => res.status(400).json({ message: e.message }));
  if (!createdUser)
    return res.status(400).json({ message: "Could not create user..." });
  return res.status(200).json(createdUser);
};
module.exports = signup;
