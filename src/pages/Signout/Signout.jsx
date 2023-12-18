import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Service
import signOutService from "../../services/signoutService";

// Slice
import { setIsAuthenticated, setToken } from "../../slices/authSlice";

// Hooks

const Signout = () => {
  const token = useSelector((state) => state?.token);
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (token) {
      signOutService(token)
        .then((res) => {
          if (res.status === 200) {
            setRedirect(true);
            setToken({ access_token: null });
            dispatch(setIsAuthenticated({ value: false }));
          }
        })
        .catch((err) => {
          if (err.response.status === 401 || err.response.status === 400) {
            setRedirect(true);
            setToken({ access_token: null });
            dispatch(setIsAuthenticated({ value: false }));
          }
        });
    } else {
      dispatch(setIsAuthenticated({ value: false }));
      setRedirect(true);
    }
  }, [dispatch, token]);

  if (redirect) {
    return <Navigate to="/signin" />;
  }

  return <div></div>;
};

export default Signout;
