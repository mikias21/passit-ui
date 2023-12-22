import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

// Service
import activateAccount from "../../services/activateService";

const ActivateAccount = () => {
  const [otp, setOtp] = useState("");
  const token = useParams();
  const [message, setMessage] = useState(
    "Fill in the pin code recieved through your email."
  );
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setLoading(true);

    try {
      const response = await activateAccount(token["token"], otp);
      if (response.data?.status === 200) {
        setDisabled(false);
        setLoading(false);
        setError(false);
        setSuccess(true);
        setMessage(response.data?.message);
        setOtp("");
      } else {
        setMessage(response.data?.message);
        setDisabled(false);
        setLoading(false);
        setSuccess(false);
        setError(true);
      }
    } catch (err) {}
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
              Activate your passit account.
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
                "Send email"
              )}
            </button>
          </form>
          <p className="mt-10 text-gray-600 text-sm">
            Create Account?{"  "}
            <Link to="/signup" className="text-blue font-semibold">
              Sign up
            </Link>
          </p>
          <p className="mt-3 text-gray-600 text-sm">
            Already have account?{"  "}
            <Link to="/signin" className="text-blue font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivateAccount;
