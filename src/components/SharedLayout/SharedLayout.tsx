import { Container } from './SharedLayout.styled';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { UserPanel } from '../UserPanel/UserPanel';
import { getIsLoggedIn } from '../../redux/auth/authSlice';
import { useAppSelector } from '../../redux/hooks';

export const SharedLayout = () => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  // const status = useAppSelector(getStatus);

  return (
    <Container>
      <header>
        <Link to="/">BR</Link>
        {isLoggedIn ? <UserPanel /> : null}
        {/* <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/training">Training</NavLink>
          <NavLink to="/registration">Registration</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav> */}
      </header>
      <main>
        <Suspense fallback={'Loading...'}>
          {/* {status === 'fulfilled' ? <Outlet /> : 'Loading...'} */}
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
