import { Navigate } from "react-router-dom";
import { useGetSelfQuery } from "./features/api";
import { useRef } from "react";
import Loading from "./pages/Loading";

const PrivateRoute = ({ children }) => {
  const storageref = useRef(localStorage.getItem("user"));
  const { isLoading, isSuccess, isError } = useGetSelfQuery();
  if (storageref.current) {
    if (isLoading) {
      return <Loading />;
    }
    if (isSuccess && !isLoading) {
      return children;
    }
    if (isError && !isLoading) {
      return <Navigate to="/login" />;
    }
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
