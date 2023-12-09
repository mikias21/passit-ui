// Pages
import SignupPage from "./pages/SignupPage/SignupPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import VerifyAccount from "./pages/VerifyAccount/VerifyAccount";
import ActivateAccount from "./pages/ActivateAccount/ActivateAccount";

import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <SignupPage /> */}
      {/* <SigninPage /> */}
      {/* <ActivateAccount /> */}
      <VerifyAccount />
    </div>
  );
}

export default App;
