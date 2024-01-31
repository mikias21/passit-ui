import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";

// Pages
import Signout from "./pages/Signout/Signout";
import Landing from "./pages/Landing/Landing";
import NotFound from "./pages/NotFound/NotFound";
import SignupPage from "./pages/Signup/SignupPage";
import SigninPage from "./pages/Signin/SigninPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import VerifyAccount from "./pages/VerifyAccount/VerifyAccount";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ActivateAccount from "./pages/ActivateAccount/ActivateAccount";
import Starred from "./pages/Dashboard/DashboardPages/Starred/Starred";
import Deleted from "./pages/Dashboard/DashboardPages/Deleted/Deleted";
import Important from "./pages/Dashboard/DashboardPages/Important/Important";
import Categories from "./pages/Dashboard/DashboardPages/Categories/Categories";

import "./App.css";

function App() {
  return (
    <div className="dark:bg-black">
      <Router>
        <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/starred" Component={Starred} />
          <Route path="/important" Component={Important} />
          <Route path="/deleted" Component={Deleted} />
          <Route path="/categories" Component={Categories} />
          <Route path="/signin" Component={SigninPage} />
          <Route path="/signup" Component={SignupPage} />
          <Route path="/reset/:token" Component={ResetPassword} />
          <Route path="/forgot" Component={ForgotPassword} />
          <Route path="/verify/:token" Component={VerifyAccount} />
          <Route path="/activate/:token" Component={ActivateAccount} />
          <Route path="/signout" Component={Signout} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
