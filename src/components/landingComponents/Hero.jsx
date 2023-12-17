import { Link } from "react-router-dom";

import Container from "./Container";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap font-popins">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Securely Store Your Passwords with Passit
            </h1>
            <p className="py-5 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl font-popins">
              Passit provides a secure and convenient platform to store and
              manage your passwords. Keep your sensitive information protected
              with our advanced encryption technology.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                to="/signup"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Start for Free
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <img
              src="/images/hero.png"
              alt="HERO"
              className="object-cover"
              width="500"
              height="500"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
