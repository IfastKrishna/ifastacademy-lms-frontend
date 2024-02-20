import React, { useState, useMemo } from "react";
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

function SideBar() {
  const isSmallDivise = useMediaQuery({ query: "(max-width:1024px)" });
  const [sideBarOpen, setSideBarOpen] = useState(false);

  useMemo(() => {
    if (!isSmallDivise) {
      setSideBarOpen(true);
    }
  }, [isSmallDivise]);

  const handlerToggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <div className="relative flex flex-col lg:flex-row">
      {/* LARGE SCREEN FOR THIS SIDEBAR */}
      <div
        className={`bg-gray-100 w-10/12 h-screen fixed z-20 top-0 left-0 lg:relative lg:w-72 px-5 border-r border-gray-200 ${
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
      <div className="block fixed z-10 top-0 left-0 right-0 lg:hidden h-14 px-5 bg-gray-100 border-b border-gray-200 w-full">
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
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" w-10 h-10 rounded-full object-cover border-2 border-gray-300 hover:cursor-pointer"
          />
        </FlexBtween>
      </div>

      {/* Page */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default SideBar;
