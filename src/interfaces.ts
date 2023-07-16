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
    currentlyReading: IBookData[];
    finishedReading: IBookData[];
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
    id?: null | string;
    goingToRead: IBookData[];
    currentlyReading: IBookData[];
    finishedReading: IBookData[];
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
  feedback?: string;
  rating?: number;
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
  status:
    | 'read'
    | 'going to read'
    | 'reading now'
    | 'training-active'
    | 'training-registration';
  updateFeedbackBookId?: (id: string) => void;
  modalOpenHandler?: () => void;
}

export interface IBooksListProps {
  status: 'read' | 'going to read' | 'reading now';
  modalHandler?: (value: boolean) => void;
  updateFeedbackBookId?: (id: string) => void;
  modalOpenHandler?: () => void;
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

export interface ITrainingForm {
  addToTrainingListHandler: (bookData: IBookData) => void;
}

export interface ITrainingList {
  trainingList: IBookData[];
  removeFromTrainingListHandler: (id: string) => void;
}

export interface IPlanningSingleBook {
  title: string;
  author: string;
  publishYear: number | null;
  totalPages: number | null;
  pagesFinished: number | null;
  rating: number | null;
  feedback: string;
  _id: string;
  __v: number | null;
}

export interface IPlanningSlice {
  startDate: string;
  endDate: string;
  books: IBookData[];
  duration: number | null;
  pagesPerDay: number | null;
  stats: IPlanningStat[];
  _id: string;
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  planningStatus: null | 'none' | 'active' | 'success' | 'fail';
  isLoading: boolean;
  error: null | string;
}

export interface ICreatePlanningQueryBody {
  startDate: string;
  endDate: string;
  books: string[];
}

export interface IMyTrainingProps {
  trainingBookList: IBookData[];
  startDate: string;
  endDate: string;
  updateTrainingBookList: (value: IBookData[]) => void;
  updateStartDate: (value: string) => void;
  updateEndDate: (value: string) => void;
  updateIsFormSubmitted: (value: boolean) => void;
}

export interface IMyGoalsProps {
  trainingBookList: IBookData[];
  planningStartDate: string;
  planningEndDate: string;
}

export interface IModalProps {
  modalType: string;
  modalCloseHandler: () => void;
  resetTrainingRegistrationData: () => void;
}

export interface IStore {
  auth: IAuthState;
  planning: IPlanningSlice;
}

export interface IPlanningStat {
  time: string;
  pagesCount: number;
}

export interface IGetPlanningPayloadAction {
  planning: {
    books: IBookData[];
    duration: number;
    endDate: string;
    pagesPerDay: number;
    startDate: string;
    _id: string;
    stats: IPlanningStat[];
  };
}

export interface ICreatePlanningPayloadAction {
  books: IBookData[];
  duration: number;
  endDate: string;
  pagesPerDay: number;
  startDate: string;
  _id: string;
  stats: IPlanningStat[];
}

export interface IUpdatePlanningPayloadAction {
  planning: {
    books: string[];
    duration: number;
    endDate: string;
    pagesPerDay: number;
    startDate: string;
    _id: string;
    stats: IPlanningStat[];
  };
}

export interface IGetUserDataPayloadAction {
  refreshedData?: {
    newAccessToken: string;
    newRefreshToken: string;
    newSid: string;
  } | null;
  user: {
    name: string;
    email: string;
    // id: string;
    goingToRead: IBookData[];
    currentlyReading: IBookData[];
    finishedReading: IBookData[];
  };
}

export interface IUpdateBookResponseData {
  rating?: number;
  feedback?: string;
}

export interface IUpdateBookResponseDataWithId {
  rating?: number;
  feedback?: string;
  id: string;
}

export interface IFeedbackFormProps {
  id: string;
  modalCloseHandler: () => void;
}

export interface IUpdateBookData {
  id: string;
  values: {
    rating: number;
    feedback: string;
  };
}

export interface IChartData {
  name: string;
  actual: number;
  plan: number;
}

export interface ICustomTooltipData {
  payload: {
    name: string;
    value: number;
    dataKey: string;
  }[];
  label: string;
}

export interface IMobileTrainingBooksListProps {
  type: 'active' | 'registration';
  trainingList?: IBookData[];
  removeFromTrainingListHandler?: (id: string) => void;
}

export interface ISingleTrainingBookProps {
  title: string;
  author: string;
  publishYear: number;
  pagesTotal: number;
  pagesFinished: number;
  _id: string;
  type: 'active' | 'registration';
  removeFromTrainingListHandler?: (id: string) => void;
}
