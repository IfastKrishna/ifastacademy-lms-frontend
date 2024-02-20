import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlineEdit } from "react-icons/md";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement profile update logic here
    // You can dispatch an action to update the profile
    setIsEditing(false); // Close the edit form after submission
  };

  return (
    <div className="bg-gray-100 min-h-screen py-20 px-2 lg:py-8">
      <div className="relative max-w-4xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <button
          className="bg-slate-100 p-2 rounded-full absolute right-3 top-3 duration-200 border-0 hover:bg-slate-300 hover:border-gray-300"
          onClick={handleEditClick}
        >
          <MdOutlineEdit />
        </button>
        <div className="p-8">
          <div className="flex flex-col items-center justify-between mb-6 sm:flex-row">
            <img
              src={user.avatar}
              alt="Avatar"
              className="w-28 h-28 lg:w-14 lg:h-14 rounded-full mr-4 border border-gray-300"
            />
            <div>
              <h1 className="text-2xl font-semibold">{user.name}</h1>
              <p className="text-gray-600">@{user.username}</p>
            </div>
            <p className="text-gray-600 bg-gray-100 inline px-3 rounded-xl font-bold cursor-pointer">
              {user.role}
            </p>
          </div>
          <div className="mb-6 text-center sm:text-start">
            <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
            <p className="text-gray-600">Email: {user.email}</p>
            <p className="text-gray-600">Phone: {user.phone}</p>
            <p className="text-gray-600">Address: {user.address}</p>
          </div>
          <div className="mb-6 text-center sm:text-start">
            <h2 className="text-lg font-semibold mb-2">About</h2>
            <p className="text-gray-600">{user.aboutUs}</p>
          </div>
          <div className="mb-6 text-center sm:text-start">
            <h2 className="text-lg font-semibold mb-2">Social Links</h2>
            <ul>
              {user.socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.linkUrl}
                    className="text-gray-600 hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {isEditing && (
        <div className="fixed inset-1 z-30 bg-gray-500 bg-opacity-50 flex justify-center items-center p-4">
          <div className=" w-auto bg-white p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              {/* Implement form fields for updating profile */}
              {/* For example: */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={user.name}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              {/* Add more form fields as needed */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 px-4 py-2 text-white bg-gray-400 rounded-md"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
