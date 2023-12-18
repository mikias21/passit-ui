import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { MdLabelImportant } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import { FaUserCog } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";

// Components
import SidebarLinkGroup from "./SidebarLinkGroup";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute z-50 left-0 top-0 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 font-open ease-linear lg:static lg:translate-x-0 shadow-xl ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link to="/">
          <h1 className="text-2xl font-bold text-blue mt-7 ml-4 font-popins">
            passit
          </h1>
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        ></button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear text-slate-700 text-sm mt-7 lg:-mt-7 font-popins">
        <nav className="-mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <h3 className="mb-2 ml-4 font-semibold">Menu</h3>
            <hr className="mb-2 border border-slate-200 w-24 ml-4" />

            <ul className="mb-6 flex flex-col gap-1.5">
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/" || pathname.includes("dashboard")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#BFDBFE] font-popins ${
                          (pathname === "/" ||
                            pathname.includes("dashboard")) &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                      >
                        <MdDashboard />
                        Dashboard
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              <li>
                <Link
                  to="/calendar"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#BFDBFE] ${
                    pathname.includes("calendar") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <IoIosStar />
                  Starred
                </Link>
              </li>
              <li>
                <Link
                  to="/calendar"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#BFDBFE] ${
                    pathname.includes("calendar") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <MdLabelImportant />
                  Important
                </Link>
              </li>
              <li>
                <SidebarLinkGroup
                  activeCondition={
                    pathname === "/ui" || pathname.includes("ui")
                  }
                >
                  {(handleClick, open) => {
                    return (
                      <React.Fragment>
                        <Link
                          to="#"
                          className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                            (pathname === "/ui" || pathname.includes("ui")) &&
                            "bg-graydark dark:bg-meta-4"
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            sidebarExpanded
                              ? handleClick()
                              : setSidebarExpanded(true);
                          }}
                        >
                          <BiSolidCategoryAlt />
                          Categories
                          <svg
                            className={`absolute right-7 top-1/2 -translate-y-1/2 fill-current ${
                              open && "rotate-180"
                            }`}
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                              fill=""
                            />
                          </svg>
                        </Link>
                        {/* <!-- Dropdown Menu Start --> */}
                        <div
                          className={`translate transform overflow-hidden text-xs ${
                            !open && "hidden"
                          }`}
                        >
                          <ul className="mt-1 mb-5.5 pl-10">
                            <li className="mb-2">
                              <Link
                                to="/ui/alerts"
                                className=" flex group relative items-center gap-1 rounded-md duration-300 ease-in-out text-xs font-bold"
                              >
                                <IoMdAdd className="text-base" />
                                Add
                              </Link>
                            </li>
                            <li className="mb-2 pl-1">
                              <Link
                                to="/ui/alerts"
                                className="group relative items-center gap-2.5 rounded-md duration-300 ease-in-out"
                              >
                                Main
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </React.Fragment>
                    );
                  }}
                </SidebarLinkGroup>
              </li>
              <li>
                <Link
                  to="/calendar"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-[#BFDBFE] ${
                    pathname.includes("calendar") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <MdDelete />
                  Deleted
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 ml-4 text-xs font-semibold">Settings</h3>
            <hr className="mb-2 border border-slate-200 w-24 ml-4" />

            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <Link
                  to="/chart"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#BFDBFE] ${
                    pathname.includes("chart") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <GrSystem />
                  System Settings
                </Link>
              </li>
              <li>
                <Link
                  to="/chart"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#BFDBFE] ${
                    pathname.includes("chart") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <FaUserCog />
                  Profile settings
                </Link>
              </li>
              <li>
                <Link
                  to="/signout"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#BFDBFE] ${
                    pathname.includes("chart") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <IoLogOutSharp />
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
