import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";

// Icons
import { PiSignInLight } from "react-icons/pi";

// Local imports
import ThemeSwitcher from "../utilComponents/ThemeSwticher";

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          <>
            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
              <Link to="/">
                <span className="flex items-center space-x-2 text-3xl font-extrabold text-blue">
                  pass<span className="text-black dark:text-white">.</span>it
                </span>
              </Link>
            </div>
          </>
        </Disclosure>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <div className="flex items-center px-6 py-2 text-slate-900 shadow-lg md:ml-5 dark:text-blue space-x-3 font-popins dark:shadow-slate-700 dark:shadow-xl dark:bg-[#191919]">
            <Link to="/signin" className="">
              Sign in
            </Link>
            <PiSignInLight />
          </div>
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
