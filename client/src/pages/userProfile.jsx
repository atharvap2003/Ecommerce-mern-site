import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { FaPlus, FaTrash } from "react-icons/fa";

const UserProfile = () => {
  // Get email from Redux store (assuming `user.email` is stored in state)
  const navigate = useNavigate();

  // Get email from Redux state
  const { email } = useSelector((state) => state.user);

  useEffect(() => {
    // If no email is found in the state, redirect to login page
    if (!email) {
      navigate("/");
    }
  }, [email, navigate]);


  // Component state for user profile and UI management
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    addresses: [
      { street: "", city: "", state: "", postalCode: "", country: "" },
    ],
    favoriteCategories: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch profile information on component mount
  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8000/api/userprofile?email=${email}`
        );
        setProfile(response.data || profile); // If no data, keep default blank
      } catch (error) {
        console.error("Error fetching profile", error);
        setError("Failed to load profile data.");
      }
      setIsLoading(false);
    };
    getUserProfile();
  }, [email]);

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Handle address change
  const handleAddressChange = (e, index, field) => {
    const updatedAddresses = [...profile.addresses];
    updatedAddresses[index][field] = e.target.value;
    setProfile((prevProfile) => ({
      ...prevProfile,
      addresses: updatedAddresses,
    }));
  };

  // Add a new address field
  const addAddress = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      addresses: [
        ...prevProfile.addresses,
        { street: "", city: "", state: "", postalCode: "", country: "" },
      ],
    }));
  };

  // Remove an address field
  const removeAddress = (index) => {
    const updatedAddresses = profile.addresses.filter((_, i) => i !== index);
    setProfile((prevProfile) => ({
      ...prevProfile,
      addresses: updatedAddresses,
    }));
  };

  // Handle form submission (update profile)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/userprofile/update", profile);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile", error);
      setError("Failed to update profile. Please try again.");
    }
  };

  if (isLoading) return <p>Loading profile...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            disabled
            className="block w-full border-gray-300 rounded-md shadow-sm mt-1 p-1 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            required
            value={profile.firstName}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md shadow-sm mt-1 p-1 outlinenone"
          />
        </div>

        <div>
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            required
            value={profile.lastName}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md shadow-sm mt-1 p-1 outlinenone"
          />
        </div>

        <div>
          <label className="block text-gray-700">Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            required
            value={profile.mobileNumber}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md shadow-sm mt-1 p-1 outlinenone"
          />
        </div>

        <div>
          <label className="block text-gray-700">Addresses</label>
          {profile.addresses.map((address, index) => (
            <div key={index} className="mt-2">
              <input
                type="text"
                name={`street-${index}`}
                value={address.street}
                onChange={(e) => handleAddressChange(e, index, "street")}
                placeholder="Street"
                required
                className="block w-full border-gray-300 rounded-md shadow-sm mt-1 p-1 outlinenone"
              />
              <input
                type="text"
                name={`city-${index}`}
                value={address.city}
                onChange={(e) => handleAddressChange(e, index, "city")}
                placeholder="City"
                required
                className="block w-full border-gray-300 rounded-md shadow-sm mt-1 p-1 outlinenone"
              />
              <input
                type="text"
                name={`state-${index}`}
                value={address.state}
                onChange={(e) => handleAddressChange(e, index, "state")}
                placeholder="State"
                required
                className="block w-full border-gray-300 rounded-md shadow-sm mt-1 p-1 outlinenone"
              />
              <input
                type="text"
                name={`postalCode-${index}`}
                value={address.postalCode}
                onChange={(e) => handleAddressChange(e, index, "postalCode")}
                placeholder="Postal Code"
                required
                className="block w-full border-gray-300 rounded-md shadow-sm mt-1 p-1 outlinenone"
              />
              <input
                type="text"
                name={`country-${index}`}
                value={address.country}
                onChange={(e) => handleAddressChange(e, index, "country")}
                placeholder="Country"
                required
                className="block w-full border-gray-300 rounded-md shadow-sm mt-1 p-1 outlinenone"
              />
 
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeAddress(index)}
                  className="text-red-500 mt-2 hover:text-red-700"
                >
                  <FaTrash /> Remove Address
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addAddress}
            className="text-blue-500 mt-4 hover:text-blue-700 flex items-center"
          >
            <FaPlus /> Add Address
          </button>
        </div>

        {/* Favorite Categories */}
        <div>
          <label className="block text-gray-700">Favorite Categories</label>
          <input
            type="text"
            name="favoriteCategories"
            value={profile.favoriteCategories.join(", ")}
            onChange={(e) =>
              handleChange({
                target: {
                  name: "favoriteCategories",
                  value: e.target.value.split(", ").map((cat) => cat.trim()),
                },
              })
            }
            className="block w-full border-gray-300 rounded-md shadow-sm mt-1"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
