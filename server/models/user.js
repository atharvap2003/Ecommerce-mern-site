const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const addressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
});

const userSchema = new Schema({
  // Login details
  username: {
    type: String,
    required: true,
    min: 4,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    min: 4,
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

  // Profile details
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    match: [/^\d{10,15}$/, "Please enter a valid mobile number"],
  },
  addresses: [addressSchema], // Array of addresses
  favoriteCategories: {
    type: [String], // Array of favorite categories
  },
}, { timestamps: true });

const UserModel = model("User", userSchema);

module.exports = UserModel;
