import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import FormButton from "../../components/formComponents/FormButton";

// Service
import signUp from "../../services/signupService";
import getIpAddress from "../../services/getIpAddress";

// Icons
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const SignupPage = () => {
  const [message, setMessage] = useState(
    "Create your account using your email and password."
  );
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [userAgent, setUserAgent] = useState(navigator.userAgent);

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

    try {
      const response = await signUp(email, password, ipAddress, userAgent);
      if (response.data?.status !== 201) {
        setMessage(response.data?.message);
        setSuccess(false);
        setError(true);
        setPassword("");
      } else {
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
                  className="w-full border border-slate-300 p-4 rounded focus:outline-none focus:border-secondary"
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
                  className="w-full border border-slate-300 p-4 rounded focus:outline-none focus:border-secondary"
                  placeholder="Your password"
                  required
                />
                <FaLock className="absolute right-7 top-1/2 transform -translate-y-1/2 text-slate-500" />
              </div>
            </div>
            <FormButton title="Create an account" />
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
