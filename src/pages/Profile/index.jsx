import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// Custom hooks
import useAuth from "../../hooks/useAuth";

// Components
import Header from "../../components/dashboardComponents/Header";
import CardOne from "../../components/dashboardComponents/CardOne";
import Sidebar from "../../components/dashboardComponents/Sidebar";
import ProfileHero from "../../components/profilePageComponents/Hero";

// Icons
import { MdDelete } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { MdNotificationImportant } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";

const ProfilePage = () => {
  const { isAuthenticated } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const deletedPassDataCounter = useSelector(
    (state) => state.deletedPassDataCounter
  );
  const importantPassDataCounter = useSelector(
    (state) => state.importantPassDataCounter
  );
  const passDataCounter = useSelector((state) => state.passDataCounter);

  return (
    <>
      {isAuthenticated ? (
        <div className=" bg-slate-50 dark:bg-black">
          <div className="flex h-screen overflow-hidden">
            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <Header
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                  <div className="bg-white dark:bg-black">
                    <ProfileHero />
                    <div className="mt-24 bg-white p-7 dark:bg-black">
                      <div className="mb-10">
                        <p className="text-center font-popins text-3xl dark:text-white">
                          Anon user
                        </p>
                        <p className="text-center font-popins text-lg dark:text-white">
                          Personal Account
                        </p>
                      </div>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                        <CardOne
                          title="Stored"
                          amount={passDataCounter}
                          Icon={IoIosSave}
                        />
                        <CardOne
                          title="Deleted"
                          amount={deletedPassDataCounter}
                          Icon={MdDelete}
                        />
                        <CardOne
                          title="Important"
                          amount={importantPassDataCounter}
                          Icon={MdNotificationImportant}
                        />
                        <CardOne
                          title="Issues"
                          amount={0}
                          Icon={IoIosWarning}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/signin" />
      )}
    </>
  );
};

export default ProfilePage;
