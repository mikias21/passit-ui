import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center dark:bg-black">
      <img
        src="/images/3793096.jpg"
        alt="NOT FOUND"
        className=" w-4/12 h-5/6"
      />
      <p className="text-2xl font-popins pb-7">OPPS! Page not found !</p>
      <Link to="/">
        <p className="text-xs text-blue">Go back to home</p>
      </Link>
    </div>
  );
};

export default NotFound;
