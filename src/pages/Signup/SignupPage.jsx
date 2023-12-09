import { Link } from "react-router-dom";

// Components
import FormHeader from "../../components/formComponents/FormHeader";
import EmailInput from "../../components/formComponents/EmailInput";
import PasswordInput from "../../components/formComponents/PasswordInput";
import FormButton from "../../components/formComponents/FormButton";

const SignupPage = () => {
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
          <FormHeader
            title="Sign Up to passit"
            info="Create your account using your email and password."
          />
          <EmailInput />
          <PasswordInput label="Password" placeholder="Your password" />
          <FormButton title="Create an account" />
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
