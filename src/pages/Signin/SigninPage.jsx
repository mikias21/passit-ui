import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

// Components
import ThemeSwitcher from "../../components/utilComponents/ThemeSwticher";

// Icons
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";

// Service
import signIn from "../../services/signinService";
import getIpAddress from "../../services/getIpAddress";

// Slice
import { setToken } from "../../slices/authSlice";

// Custom hook
import useAuth from "../../hooks/useAuth";

const SigninPage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [userAgent] = useState(navigator.userAgent);
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(
    "Use your email and password to log in."
  );

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    getIpAddress()
      .then((res) => {
        if (res.status === 200) {
          setIpAddress(res.data.ip);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDisabled(true);

    try {
      const response = await signIn(email, password, ipAddress, userAgent);
      if (response.data?.status === 200) {
        setError(false);
        const userData = {
          access_token: response.data?.access_token,
          token_type: response.data?.token_type,
        };
        setLoading(false);
        setDisabled(false);
        dispatch(setToken(userData));
      } else {
        setLoading(false);
        setDisabled(false);
        setError(true);
        setPassword("");
        setMessage(response.data?.message);
      }
    } catch (err) {}
  };

  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-black">
      <ThemeSwitcher />
      <div className="mx-auto p-8 md:flex md:space-x-20 dark:bg-gray-800">
        <div className="hidden md:block md:w-1/2 md:pr-8">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-secondary mb-4 font-body text-center dark:text-white">
              Welcome to <span className="text-blue">passit</span>
            </h2>
            <p className="text-gray-600 font-body text-center dark:text-white">
              store passwords securely and access whenever needed.
            </p>
          </div>
          <img src="/images/7070629_3293466.svg" alt="" className="w-full" />
        </div>

        <div className="w-full md:w-1/2 font-body dark:text-white dark:bg-[#111] p-10 dark:rounded-sm dark:shadow-sm">
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <h3 className="text-2xl font-bold mb-4 font-body">
              Sign in to your passit account
            </h3>
            <p
              className={`mb-5 font-body text-sm ${
                error ? "text-red-500" : ""
              }`}
            >
              {message}
            </p>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-slate-300 p-4 rounded focus:outline-none focus:border-secondary text-black dark:bg-slate-200"
                  placeholder="Enter your email"
                  required
                />
                <FaEnvelope className="absolute right-7 top-1/2 transform -translate-y-1/2 text-slate-500" />
              </div>
            </div>
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
                  className="text-black w-full border border-slate-300 p-4 rounded focus:outline-none focus:border-secondary dark:bg-slate-200"
                  placeholder="Your password"
                  required
                />
                <FaLock className="absolute right-7 top-1/2 transform -translate-y-1/2 text-slate-500" />
              </div>
            </div>
            <button
              className={`w-full text-white p-3 rounded focus:outline-none focus:shadow-outline cursor-pointer ${
                disabled
                  ? "bg-lightblue bg-opacity-30"
                  : "bg-blue hover:bg-opacity-90"
              }`}
              disabled={disabled}
            >
              {loading ? (
                <ClipLoader
                  color="#ffffff"
                  loading={loading}
                  size={15}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "Sign in"
              )}
            </button>
          </form>
          <p className="mt-10 text-gray-600 text-sm">
            Create Account?{"  "}
            <Link to="/signup" className="text-blue font-semibold">
              Sign up
            </Link>
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            Forgot password? {"  "}
            <Link to="/forgot" className="text-blue font-semibold">
              Help
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
