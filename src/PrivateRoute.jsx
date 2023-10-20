import { Navigate } from "react-router-dom";
import { useGetSelfQuery } from "./features/api";
import { useRef } from "react";

const PrivateRoute = ({ children }) => {
  const storageref = useRef(localStorage.getItem("user"));
  const { isLoading, isSuccess, isError } = useGetSelfQuery();
  if (storageref.current) {
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
