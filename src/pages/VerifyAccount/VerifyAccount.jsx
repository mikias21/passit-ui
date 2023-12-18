import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Navigate, redirect } from "react-router-dom";

// Components
import FormButton from "../../components/formComponents/FormButton";

// Services
import verifyAccountService from "../../services/verifyAccountService";

// User Slice
import { setToken } from "../../slices/authSlice";

const VerifyAccount = () => {
  const [message, setMessage] = useState(
    "You are here because we noticed unusal activity on your account."
  );
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ipAddress, setIpAddress] = useState("11.11.11.12");
  const [userAgent, setUserAgent] = useState(navigator.userAgent);
  const [redirect, setRedirect] = useState(false);
  const token = useParams();
  const dispatch = useDispatch();

  if (redirect) {
    return <Navigate to="/dashboard" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await verifyAccountService(
        token["token"],
        otp,
        ipAddress,
        userAgent
      );
      if (response.status === 200) {
        setError(false);
        dispatch(setToken(response.data));
        setRedirect(true);
      }
    } catch (err) {
      setSuccess(false);
      setError(true);
      setMessage(err.response.data["detail"]);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="mx-auto p-8 md:flex md:space-x-20">
        <div className="hidden md:block md:w-1/2 md:pr-8">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-secondary mb-4 font-body text-center">
              Welcome to <span className="text-blue">passit</span>
            </h2>
            <p className="text-gray-600 font-body text-center">
              store passwords securely and access whenever needed.
            </p>
          </div>
          <img src="/images/7070629_3293466.svg" alt="" className="w-full" />
        </div>

        <div className="w-full md:w-1/2 font-body">
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <h3 className="text-2xl font-bold mb-4 font-body">
              Verify your passit account.
            </h3>
            <p
              className={`mb-5 font-body text-sm ${
                error ? "text-red-500" : ""
              } ${success ? "text-green-500" : ""}`}
            >
              {message}
            </p>
            <div className="mb-4">
              <label htmlFor="pin" className="block text-sm font-semibold mb-2">
                PIN code
              </label>
              <div className="space-x-2">
                <input
                  id="pin"
                  type="text"
                  className="w-full border border-slate-300 p-2 rounded focus:outline-none focus:border-secondary"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            </div>
            <FormButton title="Verify Account" />
          </form>
          <p className="mt-10 text-gray-600 text-sm">
            Create Account?{"  "}
            <Link to="/signup" className="text-blue font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
