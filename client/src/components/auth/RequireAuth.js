import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  const rolesArray = auth?.roles ? Object.values(auth.roles) : [];
  return rolesArray.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.accessToken ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
