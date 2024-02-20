import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "../Logo";
import { FaUser, FaChalkboardTeacher } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import {
  MdSpaceDashboard,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdClass,
  MdOutlineMenu,
  MdOutlineClose,
} from "react-icons/md";
import { Link, useNavigate, NavLink } from "react-router-dom";
import Menu from "./Menu";
import MenuWrapper from "./MenuWrapper";
import SubMenu from "./SubMenu";
import FlexBtween from "../FlexBetween/FlexBtween";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/authSlice.js";

function SideBar() {
  const isSmallDevice = useMediaQuery({ query: "(max-width:1024px)" });
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSmallDevice) {
      setSideBarOpen(true);
    } else {
      setSideBarOpen(false);
    }
  }, [isSmallDevice]);

  const handleToggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  const handleToggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="relative flex flex-col lg:flex-row">
      {/* LARGE SCREEN FOR THIS SIDEBAR */}
      <div
        className={`bg-white w-10/12 h-screen fixed z-20 top-0 left-0 lg:relative lg:w-72 px-5 border-r border-gray-200 ${
          sideBarOpen
            ? "transition-transform duration-300 transform translate-x-0"
            : "transition-transform duration-300 transform -translate-x-full"
        } `}
      >
        <section className={`sidebar flex flex-col gap-y-3 `}>
          <FlexBtween className={"border-b border-b-gray-300 py-2 px-4 mt-3"}>
            <Link to="">
              <Logo />
            </Link>

            {isSmallDevice ? (
              <MdOutlineClose
                fontSize={32}
                onClick={handleToggleSideBar}
                className=" cursor-pointer"
              />
            ) : null}
          </FlexBtween>
          <div className="w-full h-full flex">
            <MenuWrapper className="flex flex-col gap-y-1">
              <Menu to="/">
                <MdSpaceDashboard className="mr-3" /> Dashboard
              </Menu>
              <Menu to="/profile">
                <MdSpaceDashboard className="mr-3" /> Profile
              </Menu>
              <Menu to="/course">
                <MdSpaceDashboard className="mr-3" /> Course
              </Menu>
              <Menu to="/instructors">
                <FaChalkboardTeacher className="mr-3" /> Instructors
              </Menu>
              <Menu to="/students">
                <FaUser className="mr-3" /> Students
              </Menu>
              <SubMenu
                menuName={
                  <div className="flex items-center">
                    <MdClass className="mr-3" />
                    Sections
                  </div>
                }
                isActiveIcons={<MdKeyboardArrowDown />}
                isDeActiveIcons={<MdKeyboardArrowUp />}
              >
                <Menu to="/sections/add">
                  <MdSpaceDashboard className="mr-3" /> Add
                </Menu>
                <Menu to="/sections/close">
                  <FaChalkboardTeacher className="mr-3" /> Close
                </Menu>
              </SubMenu>
            </MenuWrapper>
          </div>
          {authStatus === true && !isSmallDevice ? (
            <div className="flex items-center absolute bottom-5 left-9">
              <img
                src={user?.avatar}
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
                alt="Profile"
              />

              <button
                onClick={handleLogout}
                className="flex items-center text-xl px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md w-full text-left"
              >
                <IoLogOut className="mr-2" /> Logout
              </button>
            </div>
          ) : !isSmallDevice ? (
            <Link
              to="/login"
              className=" bg-black/10 py-2 px-4 rounded-md font-bold duration-200 hover:shadow hover:bg-black/30  hover:text-gray-700"
            >
              Login
            </Link>
          ) : null}
        </section>
      </div>

      {/* MOBILE DEVICE FOR NAVBAR */}
      <div className="block fixed z-10 top-0 left-0 right-0 lg:hidden h-14 px-5 bg-white border-b border-gray-200 w-full">
        <FlexBtween className="h-full px-5">
          <div className="flex items-center">
            <MdOutlineMenu
              fontSize={30}
              className="mr-3 cursor-pointer"
              onClick={handleToggleSideBar}
            />
            <Link to="">
              <Logo />
            </Link>
          </div>

          {authStatus ? (
            <div
              className="relative flex items-center cursor-pointer"
              onClick={handleToggleProfileDropdown}
            >
              <img
                src={user?.avatar}
                className="w-8 h-8 rounded-full object-cover border-2 border-gray-300"
                alt="Profile"
              />
              {profileDropdownOpen && (
                <div className="absolute right-0 top-8 mt-2 py-2 w-48 bg-white border border-gray-100 rounded-md shadow-xl z-10">
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 text-gray-800 ${
                        isActive ? "bg-gray-200" : null
                      } hover:bg-gray-200`
                    }
                  >
                    <FaUser className="mr-3" /> Profile
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  >
                    <IoLogOut className="mr-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className=" bg-black/10 py-2 px-4 rounded-md font-bold duration-200 hover:shadow hover:bg-black/30  hover:text-gray-700"
            >
              Login
            </Link>
          )}
        </FlexBtween>
      </div>

      <div
        className={`flex-1 bg-gray-100 ${
          isSmallDevice ? "overflow-x-hidden" : "h-screen"
        } overflow-auto`}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default SideBar;
