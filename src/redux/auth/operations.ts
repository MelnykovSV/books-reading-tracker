import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getErrorMessage } from '../../getErrorMessage';
// import toast from 'react-toastify';
import { ISignUpData, ISignInData, ISignUpPayload } from '../../interfaces';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk<ISignUpPayload, ISignUpData>(
  'auth/signUp',
  async ({ name, email, password }: ISignUpData, thunkAPI) => {
    try {
      const response = await axios.post('/auth/register', {
        name,
        email,
        password,
      });
      console.log(response.data);
      return response.data;
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
      const response = axios.post('auth/login', { email, password });
      console.log(response);
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = axios.post('auth/logout');
    console.log(response);
  } catch (error) {
    console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
    return thunkAPI.rejectWithValue(getErrorMessage(error));
  }
});

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (sid, thunkAPI) => {
    try {
      const response = axios.post('auth/refresh', { sid });
      console.log(response);
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const getUserData = createAsyncThunk(
  'auth/getUserData',
  async (sid, thunkAPI) => {
    try {
      const response = axios.get('user/books');
      console.log(response);
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);
