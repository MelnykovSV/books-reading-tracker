import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signUp, signIn, logOut, refresh, getUserData } from './operations';
import { isError, isPending } from '../statusCheckers';
import { IUserPayload, IAuthState } from '../../interfaces';

const initialState: IAuthState = {
  user: { name: null, email: null, id: null },
  accessToken: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  status: 'indle',
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      signUp.fulfilled,
      (state, action: PayloadAction<IUserPayload>) => {
        // setUserData(state, action);
        state.user = action.payload.userData;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.status = 'fulfilled';
        state.error = null;
        // fulfill(state);
      }
    );
    builder.addCase(
      signIn.fulfilled,
      (state, action: PayloadAction<IUserPayload>) => {
        state.user = action.payload.userData;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.status = 'fulfilled';
        state.error = null;
      }
    );
    builder.addCase(logOut.fulfilled, state => {
      // clearUserData(state);
      state.user = { name: null, email: null, id: null };
      state.accessToken = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.status = 'fulfilled';
      state.error = null;
    });
    builder.addCase(
      getUserData.fulfilled,
      (state, action: PayloadAction<any>) => {
        if (!action.payload) {
          state.user = { name: null, email: null, id: null };
          state.accessToken = null;
          state.refreshToken = null;
          state.isLoggedIn = false;
          state.isLoading = false;
          state.status = 'fulfilled';
          state.error = null;
          console.log('no data');
          return;
        }
        if (action.payload) {
          state.user = action.payload.user;
          state.isLoggedIn = true;

          if (action.payload.refreshedData) {
            state.accessToken = action.payload.refreshedData.newAccessToken;
            state.refreshToken = action.payload.refreshedData.newRefreshToken;
            state.status = 'fulfilled';
            state.sid = action.payload.refreshedData.newSid;
            console.log('data');
          }
        }
      }
    );
    builder.addMatcher(isPending, state => {
      state.isLoading = true;
      state.status = 'pending';
    });
    builder.addMatcher(isError, (state, action) => {
      state.isLoading = false;
      state.status = 'rejected';
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

// function fulfill(state: IAuthSliceState) {
//   state.isLoading = false;
//   state.error = null;
// }

// function setUserData(state: IAuthSliceState, action: AnyAction) {
//   state.user = action.payload.user;
//   state.token = action.payload.token;
//   state.isLoggedIn = true;
//   fulfill(state);
// }

// function clearUserData(state: IAuthSliceState) {
//   state.user = { name: null, email: null };
//   state.token = null;
//   state.isLoggedIn = false;
//   fulfill(state);
// }

export const userReducer = authSlice.reducer;
export const getIsLoggedIn = (state: { auth: IAuthState }) =>
  state.auth.isLoggedIn;
export const getUser = (state: { auth: IAuthState }) => state.auth.user;
export const getAccessToken = (state: { auth: IAuthState }) =>
  state.auth.accessToken;
export const getSid = (state: { auth: IAuthState }) => state.auth.sid;
export const getStatus = (state: { auth: IAuthState }) => state.auth.status;
// export const getIsLoading = (state: IStore) => state.auth.isLoading;