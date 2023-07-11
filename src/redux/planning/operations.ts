import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getErrorMessage } from '../../getErrorMessage';
import { ICreatePlanningQueryBody } from '../../interfaces';

export const createPlanning = createAsyncThunk(
  '/planning/createPlanning',
  async (planningData: ICreatePlanningQueryBody, thunkAPI) => {
    try {
      const response = await axios.post('/planning', planningData);
      return response.data;
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const updatePlanning = createAsyncThunk(
  '/planning/updatePlanning',
  async (planningData: { pages: number }, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();

      const response = await axios.patch('/planning', planningData);

      console.log(response);

      return response.data;
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const getPlanning = createAsyncThunk(
  '/planning/getPlanning',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/planning');

      return response.data;
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const finishPlanning = createAsyncThunk(
  '/planning/finishPlanning',
  (result: 'success' | 'fail') => {
    return result;
  }
);
