import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";

// Pages
import SignupPage from "./pages/Signup/SignupPage";
import SigninPage from "./pages/Signin/SigninPage";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import VerifyAccount from "./pages/VerifyAccount/VerifyAccount";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ActivateAccount from "./pages/ActivateAccount/ActivateAccount";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" Component={SigninPage} />
        <Route path="/signup" Component={SignupPage} />
        <Route path="/reset" Component={ResetPassword} />
        <Route path="/forgot" Component={ForgotPassword} />
        <Route path="/verify" Component={VerifyAccount} />
        <Route path="/activate" Component={ActivateAccount} />
      </Routes>
    </Router>
  );
}

export default App;
