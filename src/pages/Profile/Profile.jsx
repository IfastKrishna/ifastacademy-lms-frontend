import React from "react";
import { useSelector } from "react-redux";
import { MdOutlineEdit } from "react-icons/md";

const Profile = () => {
  const {
    name,
    email,
    phone,
    username,
    role,
    avatar,
    address,
    aboutUs,
    socialLinks,
    status,
    createdAt,
  } = useSelector((state) => state.auth.user);

  return (
    <div className="bg-gray-100 min-h-screen py-20 px-2 lg:py-8">
      <div className="relative max-w-4xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <button className="bg-slate-100 p-2 rounded-full absolute right-3 top-3 duration-200 border-0 hover:bg-slate-300 hover:border-gray-300">
          <MdOutlineEdit />
        </button>
        <div className="p-8">
          <div className="flex flex-col items-center justify-between mb-6 sm:flex-row">
            <div className="flex flex-col items-center sm:flex-row">
              <img
                src={avatar}
                alt="Avatar"
                className="w-28 h-28 lg:w-14 lg:h-14 rounded-full mr-4 border border-gray-300"
              />
              <div>
                <h1 className="text-2xl font-semibold">{name}</h1>
                <p className="text-gray-600">@{username}</p>
              </div>
            </div>
            <p className="text-gray-600 bg-gray-100 inline px-3 rounded-xl font-bold cursor-pointer">
              {role}
            </p>
          </div>
          <div className="mb-6 text-center sm:text-start">
            <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
            <p className="text-gray-600">Email: {email}</p>
            <p className="text-gray-600">Phone: {phone}</p>
            <p className="text-gray-600">Address: {address}</p>
          </div>
          <div className="mb-6 text-center sm:text-start">
            <h2 className="text-lg font-semibold mb-2">About</h2>
            <p className="text-gray-600">{aboutUs}</p>
          </div>
          <div className="mb-6 text-center sm:text-start">
            <h2 className="text-lg font-semibold mb-2">Social Links</h2>
            <ul>
              {socialLinks.map((link, index) => (
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
    </div>
  );
};

export default Profile;
