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
    goingToRead: IBookData[];
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
  user: {
    name: null | string;
    email: null | string;
    id: null | string;
    goingToRead: IBookData[];
  };
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

export interface ILoginSubmitHandler {
  loginSubmitHandler: (value: ISignInData) => void;
}

export interface IRegistrationSubmitHandler {
  registrationSubmitHandler: (value: ISignUpData) => void;
}

export interface IBookFormData {
  title: string;
  author: string;
  publishYear: string;
  pagesTotal: string;
}

export interface IBookData {
  title: string;
  author: string;
  publishYear: number;
  pagesTotal: number;
  _id: string;
  pagesFinished: number;
}

export interface IFormikResetForm {
  resetForm: () => void;
}

export interface ISingleBookProps {
  title: string;
  author: string;
  publishYear: number;
  pagesTotal: number;
  id: string;
  status: 'read' | 'going to read' | 'reading now';
}

export interface IBooksListProps {
  status: 'read' | 'going to read' | 'reading now';
}

export interface ITheme {
  colors: {
    text: {
      primary: string;
      primaryDark: string;
      secondary: string;
      secondaryDark: string;
      placeholder: string;
      google: string;
    };
    bg: {
      primary: string;
      secondary: string;
      decoration: string;
      title: string;
      accent: string;
      accentDark: string;
      accentSecondary: string;
    };
    transparent: {
      overlay: string;
      scroll: string;
      formBg: string;
      decoration: string;
    };
  };
  animation: {
    time: string;
    cubic: string;
  };
  sizes: {
    tablet: string;
    desktop: string;
  };
}

export interface IStyledProps {
  theme?: ITheme;
}

export interface IMyTrainingProps {
  trainingList: IBookData[];
  addToTrainingListHandler: (bookData: IBookData) => void;
  removeFromTrainingListHandler: (id: string) => void;
}

export interface ITrainingForm {
  addToTrainingListHandler: (bookData: IBookData) => void;
}

export interface ITrainingList {
  trainingList: IBookData[];
  removeFromTrainingListHandler: (id: string) => void;
}
