// Components
import FormHeader from "../../components/formComponents/FormHeader";
import EmailInput from "../../components/formComponents/EmailInput";
import PasswordInput from "../../components/formComponents/PasswordInput";
import FormButton from "../../components/formComponents/FormButton";

const ResetPassword = () => {
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
            title="Change password for your account"
            info="Use strong password to keep your account safe."
          />
          <PasswordInput label="Password" placeholder="Your password" />
          <PasswordInput
            label="Confirm password"
            placeholder="Confirm your password"
          />
          <FormButton title="Update password" />
          <p className="mt-10 text-gray-600 text-sm">
            Create Account?{"  "}
            <a href="google" className="text-blue font-semibold">
              Sign up
            </a>
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            Forgot password? {"  "}
            <a href="google" className="text-blue font-semibold">
              Help
            </a>
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            Already Have an Account?{"  "}
            <a href="google" className="text-blue font-semibold">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
