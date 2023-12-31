import { useState } from "react";
import { Navigate } from "react-router-dom";

// Components
import Sidebar from "../../../../components/dashboardComponents/Sidebar";
import Header from "../../../../components/dashboardComponents/Header";
import AddButton from "../../../../components/dashboardComponents/AddButton";
import ComingSoon from "../../../../components/dashboardComponents/ComingSoon";

// Custom hooks
import useAuth from "../../../../hooks/useAuth";

const Important = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
                <ComingSoon />
                <AddButton />
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

export default Important;
