import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getErrorMessage } from '../../getErrorMessage';
// import toast from 'react-toastify';
import {
  ISignUpData,
  ISignInData,
  IUserPayload,
  IAuthState,
  IBookFormData,
} from '../../interfaces';
import { token } from '../../api';

export const signUp = createAsyncThunk<IUserPayload, ISignUpData>(
  'auth/signUp',
  async ({ name, email, password }: ISignUpData, thunkAPI) => {
    try {
      await axios.post('/auth/register', {
        name,
        email,
        password,
      });

      const signInResponse = await axios.post('auth/login', {
        email,
        password,
      });
      token.set(signInResponse.data.accessToken);

      return signInResponse.data;
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }: ISignInData, thunkAPI) => {
    try {
      const response = await axios.post('auth/login', { email, password });
      token.set(response.data.accessToken);
      return response.data;
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  const state = thunkAPI.getState() as { auth: IAuthState };
  console.log('step1');
  try {
    console.log('step2');
    console.log(axios.defaults.headers);

    // const response = await axios.post('auth/logout');

    const response = await fetch(
      'https://bookread-backend.goit.global/auth/logout',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.auth.accessToken}`,
        },
      }
    );
    console.log('step3');
    token.unset();
    console.log('step4');
    console.log(response);
  } catch (error) {
    console.log(error);
    console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
    return thunkAPI.rejectWithValue(getErrorMessage(error));
  }
});

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (sid, thunkAPI) => {
    const state = thunkAPI.getState() as { auth: IAuthState };
    // console.log(state.auth.accessToken);
    if (state.auth.refreshToken) {
      token.set(state.auth.refreshToken);
    }

    try {
      const response = await axios.post('auth/refresh', { sid });
      console.log(response);
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const getUserData = createAsyncThunk<any, any>(
  'auth/getUserData',
  async (sid, thunkAPI) => {
    const state = thunkAPI.getState() as { auth: IAuthState };
    try {
      try {
        const response = await axios.get('user/books');
        return {
          user: response.data,
          refreshedData: null,
        };
      } catch (error) {
        console.log('outdated access token');
      }
      if (state.auth.refreshToken) {
        token.set(state.auth.refreshToken);
        console.log(state.auth.refreshToken);
      }
      console.log('started');

      const {
        data: { newAccessToken, newRefreshToken, newSid },
      } = await axios.post('auth/refresh', { sid });

      console.log(newAccessToken);

      token.set(newAccessToken);

      const response = await axios.get('user/books');

      console.log(response);

      return {
        user: response.data,
        refreshedData: { newAccessToken, newRefreshToken, newSid },
      };
    } catch (error) {
      if (getErrorMessage(error) !== 'Request failed with status code 404') {
        console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
        return thunkAPI.rejectWithValue(getErrorMessage(error));
      }
    }
  }
);

export const addBook = createAsyncThunk(
  'auth/addBook',
  async (
    { title, author, publishYear, pagesTotal }: IBookFormData,
    thunkAPI
  ) => {
    console.log(axios.defaults);
    try {
      const response = await axios.post('/book', {
        title,
        author,
        publishYear,
        pagesTotal,
      });

      console.log(response);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteBook = createAsyncThunk(
  'auth/deleteBook',
  async (id: string, thunkAPI) => {
    console.log(axios.defaults);
    try {
      const response = await axios.delete(`/book/${id}`);

      console.log(response);
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);
