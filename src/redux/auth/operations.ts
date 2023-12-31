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
import {
  IUpdateBookResponseDataWithId,
  IUpdateBookData,
} from '../../interfaces';

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
      const response1 = await axios.get('user/books');

      response.data.userData.goingToRead = [...response1.data.goingToRead];
      response.data.userData.currentlyReading = [
        ...response1.data.currentlyReading,
      ];
      response.data.userData.finishedReading = [
        ...response1.data.finishedReading,
      ];

      return response.data;
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  const state = thunkAPI.getState() as { auth: IAuthState };

  try {
    // const response = await axios.post('auth/logout');

    await fetch('https://bookread-backend.goit.global/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${state.auth.accessToken}`,
      },
    });

    token.unset();
  } catch (error) {
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
      await axios.post('auth/refresh', { sid });
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

///TODO:      FIX THIS 'ANY'

export const getUserData = createAsyncThunk<any, string>(
  'auth/getUserData',
  async (sid: string, thunkAPI) => {
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
      }

      const {
        data: { newAccessToken, newRefreshToken, newSid },
      } = await axios.post('auth/refresh', { sid });

      token.set(newAccessToken);

      const response = await axios.get('user/books');

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
    try {
      const response = await axios.post('/book', {
        title,
        author,
        publishYear,
        pagesTotal,
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteBook = createAsyncThunk(
  'auth/deleteBook',
  async (id: string, thunkAPI) => {
    try {
      await axios.delete(`/book/${id}`);

      return id;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateBook = createAsyncThunk<
  IUpdateBookResponseDataWithId,
  IUpdateBookData
>('auth/updateBook', async ({ id, values: { rating, feedback } }) => {
  console.log(id);
  console.log({
    rating,
    feedback,
  });
  try {
    const response = await axios.patch(`/book/review/${id}`, {
      rating,
      feedback,
    });
    console.log(response);
    const result = { ...response.data, id };

    return result;
  } catch (error) {
    console.log(error);
  }
});
