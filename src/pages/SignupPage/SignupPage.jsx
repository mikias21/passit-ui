import { FaEnvelope, FaLock } from "react-icons/fa";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="mx-auto p-8 md:flex md:space-x-20">
        <div className="hidden md:block md:w-1/2 md:pr-8">
          {" "}
          {/* Adjusted width */}
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
          <h3 className="text-2xl font-bold mb-4 font-body">
            Sign Up to passit
          </h3>
          <p className="mb-5 font-body text-sm">
            Create your account using your email and password
          </p>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
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
                className="w-full border border-slate-300 p-4 rounded focus:outline-none focus:border-secondary"
                placeholder="Your password"
                required
              />
              <FaLock className="absolute right-7 top-1/2 transform -translate-y-1/2 text-slate-500" />
            </div>
          </div>
          <button className="w-full bg-blue text-white p-3 rounded hover:bg-opacity-90 focus:outline-none focus:shadow-outline">
            Create account
          </button>
          <p className="mt-10 text-gray-600 text-sm">
            Already have an account?{"  "}
            <a href="google" className="text-blue font-semibold">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
