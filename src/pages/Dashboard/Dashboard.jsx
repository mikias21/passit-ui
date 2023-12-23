import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components
import Sidebar from "../../components/dashboardComponents/Sidebar";
import Header from "../../components/dashboardComponents/Header";
import CardOne from "../../components/dashboardComponents/CardOne";
import TableOne from "../../components/dashboardComponents/TableOne";
import AddButton from "../../components/dashboardComponents/AddButton";

// Custom hooks
import useAuth from "../../hooks/useAuth";
import { setUserPassData } from "../../slices/authSlice";

// Service
import { getPasswords } from "../../services/mainService";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  // const isAuthenticated = true;

  useEffect(() => {
    getPasswords(token)
      .then((res) => {
        if (res.status === 200) {
          const data = { data: res.data };
          dispatch(setUserPassData(data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, token]);

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

export default Dashboard;
