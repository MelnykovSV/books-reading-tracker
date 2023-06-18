import axios from 'axios';
import { lazy, useEffect } from 'react';

import { getUserData } from '../../redux/auth/operations';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router';
import { PrivateRoute } from '../../userMenu/PrivateRoute';
import { PublicRoute } from '../../userMenu/PublicRoute';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getSid } from '../../redux/auth/authSlice';
import { Container } from './App.styled';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

const TrainingPage = lazy(
  () => import('../../pages/TrainingPage/TrainingPage')
);
const RegistrationPage = lazy(
  () => import('../../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));

axios.defaults.baseURL = 'https://bookread-backend.goit.global';

export const App = () => {
  const sid = useAppSelector(getSid);
  const dispatch = useAppDispatch();

  // dispatch(
  //   signIn({
  //     // name: 'Qweewqrr',
  //     email: 'qwerqwt131313@mail.com',
  //     password: 'aA111111',
  //   })
  // );

  useEffect(() => {
    dispatch(getUserData(sid));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/training"
            element={
              <PrivateRoute>
                <TrainingPage />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/registration"
            element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          ></Route>

          <Route path="/"></Route>
        </Route>
      </Routes>
    </Container>
  );
};
