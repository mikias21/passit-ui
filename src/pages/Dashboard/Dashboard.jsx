import { useState } from "react";
import { FaHome, FaChartBar, FaUsers, FaCog, FaBars } from "react-icons/fa";

// 768px md

const Dashboard = () => {
  const [isContainerAVisible, setContainerAVisible] = useState(false);

  const toggleContainers = () => {
    setContainerAVisible(!isContainerAVisible);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="md:block bg-blue-600 w-64 flex-shrink-0">
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Admin</h1>
        </div>

        <ul className="space-y-4 py-2">
          <li className="flex items-center px-4 py-2">
            <FaHome className="mr-2" />
            Dashboard
          </li>
          <li className="flex items-center px-4 py-2">
            <FaChartBar className="mr-2" />
            Analytics
          </li>
          <li className="flex items-center px-4 py-2">
            <FaUsers className="mr-2" />
            Users
          </li>
          <li className="flex items-center px-4 py-2">
            <FaCog className="mr-2" />
            Settings
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="bg-slate-200 shadow flex justify-between items-center">
          <div>
            <FaBars className="bg-red" onClick={toggleContainers} />
          </div>
          <div>
            <input type="text" placeholder="hello world" />
          </div>
          <div className="bg-red-500 w-8 h-8 rounded-full"></div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-400">
          <div className="container mx-auto px-4 py-6">
            {/* Your content goes here */}
            <h2 className="text-xl font-semibold mb-4">Dashboard Content</h2>
            <p>Your charts, tables, and other content go here.</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
