import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";

// Components
import DropdownUser from "./DropdownUser";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-999 flex w-12/12 bg-white shadow-md h-16 mx-5 mt-5 rounded-lg font-open text-sm">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 block bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <GiHamburgerMenu />
          </button>
        </div>

        <div className="hidden sm:block w-9/12">
          <form action="" method="POST">
            <div className="relative">
              <button className="absolute top-1/2 left-0 -translate-y-1/2">
                <CiSearch className="text-lg" />
              </button>
              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent pr-4 pl-9 focus:outline-none h-12"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          {/* <ul className="flex items-center gap-2 2xsm:gap-4"> */}
          {/* <!-- Dark Mode Toggler --> */}
          {/* <DarkModeSwitcher /> */}
          {/* <!-- Dark Mode Toggler --> */}

          {/* <!-- Notification Menu Area --> */}
          {/* <DropdownNotification /> */}
          {/* <!-- Notification Menu Area --> */}

          {/* <!-- Chat Notification Area --> */}
          {/* <DropdownMessage /> */}
          {/* <!-- Chat Notification Area --> */}
          {/* </ul> */}

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
