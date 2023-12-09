// Pages
import SignupPage from "./pages/Signup/SignupPage";
import SigninPage from "./pages/Signin/SigninPage";
import VerifyAccount from "./pages/VerifyAccount/VerifyAccount";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ActivateAccount from "./pages/ActivateAccount/ActivateAccount";

import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <SignupPage /> */}
      {/* <SigninPage /> */}
      {/* <ActivateAccount /> */}
      {/* <VerifyAccount /> */}
      <ForgotPassword />
    </div>
  );
}

export default App;
