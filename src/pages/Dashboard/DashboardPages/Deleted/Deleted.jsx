import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// Components
import Header from "../../../../components/dashboardComponents/Header";
import Sidebar from "../../../../components/dashboardComponents/Sidebar";
import TableOne from "../../../../components/dashboardComponents/TableOne";
import AddButton from "../../../../components/dashboardComponents/AddButton";

// Custom hooks
import useAuth from "../../../../hooks/useAuth";

const Deleted = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const data = useSelector((state) => state.userPassDataDeleted);
  const { isAuthenticated } = useAuth();

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
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 ">
                  <AddButton />
                  <div className="col-span-12 xl:col-span-8">
                    <TableOne data={data} title="What you've deleted" />
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

export default Deleted;
