import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

import "./Hero.css";

const Hero = () => {
  return (
    <div className=" mb-14 lg:flex lg:p-20">
      <div className="flex items-center w-full font-popins">
        <div className="max-w-2xl mb-8">
          <h1
            className="mt-10 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white"
            id="heroTitle"
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Securely Store Your Passwords with Passit.")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Securely Store Your Passwords with Passit.")
                  .start();
              }}
            />
          </h1>
          <p className="py-5 text-sm leading-normal text-gray-500 lg:text-xl font-popins dark:text-white">
            Passit provides a secure and convenient platform to store and manage
            your passwords. Keep your sensitive information protected with our
            advanced encryption technology.
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <Link
              to="/signup"
              target="_blank"
              rel="noopener"
              className="p-3 mb-5 text-sm font-medium text-center text-white bg-indigo-600 rounded-sm shadow-lg shadow-slate-400 lg:px-8 lg:py-4 dark:shadow-slate-700"
            >
              Start for Free
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div>
          <img src="/images/6491945.jpg" alt="HERO" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
