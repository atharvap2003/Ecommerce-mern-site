const mongoose = require("mongoose");

// Define the address sub-schema (for handling multiple addresses)
const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
});

const userProfileSchema = new mongoose.Schema(
  {

    userEmail: {
      type: mongoose.Schema.Types.String,
      ref: "UserModel", 
      required: true,
      unique: true,
    },
    // Mobile number of the user
    mobileNumber: {
      type: String,
      required: true,
      match: [/^\d{10,15}$/, "Please enter a valid mobile number"],
    },
    // Name
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },

    addresses: [addressSchema],

    favoriteCategories: {
      type: [String], 
    },
  },
  { timestamps: true }
);

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

module.exports = UserProfile;
