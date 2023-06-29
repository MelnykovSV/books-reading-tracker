import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getErrorMessage } from '../../getErrorMessage';

export const createPlanning = createAsyncThunk(
  '/planning/createPlanning',
  async (planningData, thunkAPI) => {
    try {
      console.log(planningData);
      const response = await axios.post('/planning', planningData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

// export const updatePlanning = createAsyncThunk(
//   '/planning/create',
//   async (planningData, thunkAPI) => {
//     try {
//       const response = await axios.patch('/planning', planningData);
//       console.log(response);
//     } catch (error) {
//       console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
//       return thunkAPI.rejectWithValue(getErrorMessage(error));
//     }
//   }
// );

export const getPlanning = createAsyncThunk(
  '/planning/getPlanning',
  async (_, thunkAPI) => {
    try {
      console.log('get planning');
      const response = await axios.get('/planning');

      console.log(response);
      return response.data;
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);
