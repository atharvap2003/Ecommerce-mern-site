const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const addressSchema = new Schema({
  street: { type: String },
  city: { type: String  },
  state: { type: String  },
  postalCode: { type: String  },
  country: { type: String },
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
  },
  lastName: {
    type: String,
  },
  mobileNumber: {
    type: String,
    match: [/^\d{10,15}$/, "Please enter a valid mobile number"],
  },
  addresses: [addressSchema], // Array of addresses
  favoriteCategories: {
    type: [String], // Array of favorite categories
  },
}, { timestamps: true });

const UserModel = model("User", userSchema);

module.exports = UserModel;
