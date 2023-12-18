import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// Icons
import { FaLock } from "react-icons/fa";

// Components
import FormButton from "../../components/formComponents/FormButton";

// Service
import resetPasswordService from "../../services/resetPasswordService";

const ResetPassword = () => {
  const [message, setMessage] = useState(
    "Use strong password to keep your account safe."
  );
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [ipAddress, setIpAddress] = useState("11.11.11.11");
  const [userAgent, setUserAgent] = useState(navigator.userAgent);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const token = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await resetPasswordService(
        token["token"],
        password,
        confirmPassword,
        ipAddress,
        userAgent
      );
      console.log(response);
      if (response.status === 201) {
        setError(false);
        setSuccess(true);
        setPassword("");
        setConfirmPassword("");
        setMessage(response.data["msg"]);
      }
    } catch (err) {
      if (err.response.data["msg"]) {
        setSuccess(false);
        setError(true);
        setMessage(err.response.data["msg"]);
        setPassword("");
        setConfirmPassword("");
      }
      console.log(err);
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
              Change password for your account
            </h3>
            <p
              className={`mb-5 font-body text-sm ${
                error ? "text-red-500" : ""
              } ${success ? "text-green-500" : ""}`}
            >
              {message}
            </p>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-slate-300 p-4 rounded focus:outline-none focus:border-secondary"
                  placeholder="Your password"
                  required
                />
                <FaLock className="absolute right-7 top-1/2 transform -translate-y-1/2 text-slate-500" />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-2"
              >
                Confirm password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="cpassword"
                  name="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-slate-300 p-4 rounded focus:outline-none focus:border-secondary"
                  placeholder="Confirm your password"
                  required
                />
                <FaLock className="absolute right-7 top-1/2 transform -translate-y-1/2 text-slate-500" />
              </div>
            </div>
            <FormButton title="Update password" />
          </form>
          <p className="mt-10 text-gray-600 text-sm">
            Create Account?{"  "}
            <Link to="/signup" className="text-blue font-semibold">
              Sign up
            </Link>
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            Already Have an Account?{"  "}
            <Link to="/signin" className="text-blue font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
