import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Container from "./Container";

import "./Hero.css";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap font-popins mx-10">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1
              className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white"
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
            <p className="py-5 text-lg leading-normal text-gray-500 lg:text-sm xl:text-sm font-popins dark:text-white">
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
          <div>
            <img src="/images/6491945.jpg" alt="HERO" className="hero-image" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
