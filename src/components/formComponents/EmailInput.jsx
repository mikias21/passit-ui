import { FaEnvelope } from "react-icons/fa";

const EmailInput = () => {
  return (
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
  );
};

export default EmailInput;
