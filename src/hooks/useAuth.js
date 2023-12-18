import { useSelector } from "react-redux";

const useAuth = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  return {
    isAuthenticated,
  };
};

export default useAuth;
