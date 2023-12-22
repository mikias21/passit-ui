import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Service
import signUp from "../../services/signupService";
import getIpAddress from "../../services/getIpAddress";

// Icons
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";

// Components
import ThemeSwitcher from "../../components/utilComponents/ThemeSwticher";

const SignupPage = () => {
  const [message, setMessage] = useState(
    "Create your account using your email and password."
  );
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [userAgent] = useState(navigator.userAgent);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    getIpAddress()
      .then((res) => {
        if (res.status === 200) {
          setIpAddress(res.data.ip);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDisabled(true);

    try {
      const response = await signUp(email, password, ipAddress, userAgent);
      if (response.data?.status !== 201) {
        setLoading(false);
        setDisabled(false);
        setMessage(response.data?.message);
        setSuccess(false);
        setError(true);
        setPassword("");
      } else {
        setLoading(false);
        setDisabled(false);
        setError(false);
        setMessage(response.data?.message);
        setSuccess(true);
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <ThemeSwitcher />
      <div className="mx-auto p-8 md:flex md:space-x-20  dark:bg-gray-800">
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
              Sign Up to passit
            </h3>
            <p
              className={`mb-5 font-body text-sm ${
                error ? "text-red-500" : ""
              } ${success ? "text-green-500" : ""}`}
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
                  className="w-full border border-slate-300 p-4 rounded focus:outline-none focus:border-secondary dark:bg-slate-200 text-black"
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
                  className="w-full border border-slate-300 p-4 rounded focus:outline-none focus:border-secondary dark:bg-slate-200 text-black"
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
                "Create an account"
              )}
            </button>
          </form>
          <p className="mt-10 text-gray-600 text-sm">
            Already have an account?{"  "}
            <Link to="/signin" className="text-blue font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
