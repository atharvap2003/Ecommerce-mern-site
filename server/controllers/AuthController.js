const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const salt = bcrypt.genSaltSync(10);
const secret = "abcdefghijk";

export async function register(req, res) {
  try {
    const { username, email, password } = req.body;
    const userDoc = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, salt),
    });
    res.json({
      UserData: { username, email },
      Message: "User Created Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export async function login(req, res) {
  try {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    if (!userDoc) {
      return res.status(400).json({ Message: "User not Exist!!", ok: false });
    }
    const passCheck = bcrypt.compareSync(password, userDoc.password);
    if (passCheck) {
      const token = jwt.sign({ username, id: userDoc._id }, secret, {
        expiresIn: "1h",
      });
      res.cookie("token", token, { httpOnly: true, secure: true });
      res.json({ id: userDoc._id, username, token });
    } else {
      res.status(400).json("Bad Credentials");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
