import { Link } from "react-router-dom";

// Icons
import { PiSignInLight } from "react-icons/pi";

// Local imports
import ThemeSwitcher from "../utilComponents/ThemeSwticher";

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="flex items-center justify-between">
        <div className="">
          <Link to="/">
            <span className="flex items-center space-x-2 text-2xl font-extrabold text-blue lg:text-4xl">
              pass<span className="text-black dark:text-white">.</span>it
            </span>
          </Link>
        </div>

        <div className="">
          <div className="flex items-center mr-10 px-6 py-2 text-xs text-slate-900 shadow-lg md:ml-5 dark:text-blue space-x-3 font-popins dark:shadow-slate-700 dark:shadow-xl dark:bg-[#191919]">
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
