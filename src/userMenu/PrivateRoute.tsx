import { Navigate } from 'react-router';
import { getAccessToken } from '../redux/auth/authSlice';
import { useAppSelector } from '../redux/hooks';
import { IRouteProps } from '../interfaces';

export const PrivateRoute = ({ children, ...routeProps }: IRouteProps) => {
  const token = useAppSelector(getAccessToken);
  return (
    <div {...routeProps}>{token ? children : <Navigate to="/info" />}</div>
  );
};
