import { useState } from "react";

// Components
import Sidebar from "../../components/dashboardComponents/Sidebar";
import Header from "../../components/dashboardComponents/Header";
import CardOne from "../../components/dashboardComponents/CardOne";
import TableOne from "../../components/dashboardComponents/TableOne";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className=" bg-slate-50">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 ">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                <CardOne />
                <CardOne />
                <CardOne />
                <CardOne />
              </div>
              <div className="col-span-12 xl:col-span-8 mt-8">
                <TableOne />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
