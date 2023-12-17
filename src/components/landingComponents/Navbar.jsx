import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";

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
                  pass<span className="text-black">.</span>it
                </span>
              </Link>
            </div>
          </>
        </Disclosure>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            to="/signin"
            className="px-6 py-2 text-slate-700 bg-slate-200 shadow-lg md:ml-5"
          >
            Sign in
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
