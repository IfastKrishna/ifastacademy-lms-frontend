import React, { useState, useMemo, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "../Logo";
import { FaUser, FaChalkboardTeacher } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import {
  MdSpaceDashboard,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdClass,
  MdOutlineMenu,
  MdOutlineClose,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import MenuWrapper from "./MenuWrapper";
import SubMenu from "./SubMenu";
import FlexBtween from "../FlexBetween/FlexBtween";
import { useSelector } from "react-redux";

function SideBar() {
  const isSmallDivise = useMediaQuery({ query: "(max-width:1024px)" });
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!isSmallDivise) {
      setSideBarOpen(true);
    } else {
      setSideBarOpen(false);
    }
  }, [isSmallDivise]);

  const handlerToggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
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

            {isSmallDivise ? (
              <MdOutlineClose
                fontSize={32}
                onClick={handlerToggleSideBar}
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
        </section>
      </div>

      {/* MOBILE DIVISE FOR NAVBAR */}
      <div className="block fixed z-10 top-0 left-0 right-0 lg:hidden h-14 px-5 bg-white border-b border-gray-200 w-full">
        <FlexBtween className="h-full px-5">
          <div className="flex items-center">
            <MdOutlineMenu
              fontSize={30}
              className="mr-3 cursor-pointer"
              onClick={handlerToggleSideBar}
            />
            <Link to="">
              <Logo />
            </Link>
          </div>

          {authStatus ? (
            <img
              src={user.avatar}
              className=" w-10 h-10 rounded-full object-cover border-2 border-gray-300 hover:cursor-pointer"
            />
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

      {/* Page */}
      {/* <div className="flex-1"> */}
      <div
        className={`flex-1 bg-gray-100 ${
          isSmallDivise ? "overflow-x-hidden" : "h-screen"
        } overflow-auto`}
      >
        <Outlet />
      </div>
      {/* </div> */}
    </div>
  );
}

export default SideBar;
