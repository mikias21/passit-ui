import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative font-popins">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Thomas Anree
          </span>
          <span className="block text-xs">UX Designer</span>
        </span>

        <div className="h-12 w-12">
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1702167501~exp=1702168101~hmac=868445f29dfd447daae615fd821ecdb4bc0e7e8cb2082208469a2a4fff63459e"
            alt="User"
            className="rounded-full object-cover w-full h-full"
          />
        </div>

        <svg
          className={`hidden fill-current sm:block ${
            dropdownOpen ? "rotate-180" : ""
          }`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 p-3 flex flex-col rounded-md bg-white shadow-2xl font-popins w-64 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-3 border-b border-b-slate-200 border-stroke py-7.5 dark:border-strokedark">
          <li>
            <Link
              to="/profile"
              className="flex items-center gap-3.5 text-sm p-2 font-medium duration-300 ease-in-out hover:text-primary w-full hover:bg-[#BFDBFE] rounded-sm"
            >
              <FaUserAlt className="text-lg" />
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center gap-3.5 text-sm p-2 font-medium duration-300 ease-in-out hover:text-primary mb-4 w-full hover:bg-[#BFDBFE] rounded-sm"
            >
              <IoSettingsSharp className="text-lg" />
              Settings
            </Link>
          </li>
        </ul>
        <Link
          to="/signout"
          className="flex items-center gap-3.5 text-sm p-2 font-medium duration-300 ease-in-out hover:text-primary w-full hover:bg-red-100 rounded-sm"
        >
          <IoLogOutSharp className="text-lg" />
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default DropdownUser;
