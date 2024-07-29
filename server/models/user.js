const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: 4,
  },
  email: {
    type: String,
    required: true,
    min: 4,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "client"],
    default: "client",
  },
});

const UserModel = model("User", userSchema);
module.exports = UserModel;
