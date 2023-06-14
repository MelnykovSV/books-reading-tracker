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
  user: {
    name: string;
    email: string;
  };
  token: string;
}

export interface ISignUpPayload {
  email: string;
  id: string;
}
