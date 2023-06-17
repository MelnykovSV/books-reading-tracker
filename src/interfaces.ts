export interface ISignUpData {
  name: string;
  email: string;
  password: string;
}

export interface ISignInData {
  email: string;
  password: string;
}

export interface IUserPayload {
  userData: {
    name: string;
    email: string;
    id: string;
  };
  accessToken: string;
  refreshToken: string;
  sid: string;
}

export interface ISignUpPayload {
  email: string;
  id: string;
}

export interface IAuthState {
  user: { name: null | string; email: null | string; id: null | string };
  accessToken: null | string;
  refreshToken: null | string;
  sid: null | string;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: null | string;
  status: 'indle' | 'pending' | 'fulfilled' | 'rejected';
}

export interface IRouteProps {
  children: React.ReactNode;
}

// export interface IRefreshResponse
