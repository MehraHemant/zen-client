import { Navigate } from "react-router-dom";
import { useGetSelfQuery } from "./features/api";

const PrivateRoute = ({ children }) => {
  const { isLoading, isSuccess, isError } = useGetSelfQuery();
  if (isSuccess && !isLoading) {
    return children;
  }
  if (isError && !isLoading) {
   return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
