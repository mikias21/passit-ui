import { FaLock } from "react-icons/fa";

const PasswordInput = ({ label, placeholder }) => {
  return (
    <div className="mb-6">
      <label htmlFor="password" className="block text-sm font-semibold mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type="password"
          id="password"
          name="password"
          className="w-full border border-slate-300 p-4 rounded focus:outline-none focus:border-secondary"
          placeholder={placeholder}
          required
        />
        <FaLock className="absolute right-7 top-1/2 transform -translate-y-1/2 text-slate-500" />
      </div>
    </div>
  );
};

export default PasswordInput;
