import { Link } from "react-router-dom";

// Components
import PINInput from "../../components/formComponents/PINInput";
import FormHeader from "../../components/formComponents/FormHeader";
import FormButton from "../../components/formComponents/FormButton";

const ActivateAccount = () => {
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
            title="Activate your passit account."
            info="Fill in the pin code recieved through your email."
          />
          <PINInput />
          <FormButton title="Activate" />
          <p className="mt-10 text-gray-600 text-sm">
            Create Account?{"  "}
            <Link to="/signup" className="text-blue font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivateAccount;
