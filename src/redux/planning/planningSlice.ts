import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { createPlanning, getPlanning } from './operations';
import { isError, isPending } from '../statusCheckers';
import { IPlanning } from '../../interfaces';

const initialState = {
  planning: {
    startDate: '',
    endDate: '',
    books: [
      {
        title: '',
        author: '',
        publishYear: null,
        totalPages: null,
        pagesFinished: null,
        rating: null,
        feedback: '',
        _id: '',
        __v: null,
      },
    ],
    duration: null,
    pagesPerDay: null,
    stats: {
      date: '',
      pagesCount: '',
    },
    _id: '',
  } as IPlanning,
  isLoading: false,
  error: null,
};

const planningSlice = createSlice({
  name: 'planning',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase<any>(
      createPlanning.fulfilled,
      (state, action: PayloadAction<any>) => {
        console.log('action');
        console.log(action);
        state.planning = action.payload;
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addCase<any>(
      getPlanning.fulfilled,
      (state, action: PayloadAction<any>) => {
        console.log('action');
        console.log(action);
        state.planning = action.payload;
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addMatcher(isPending, state => {
      state.isLoading = true;
    });
    builder.addMatcher(isError, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export const planningReducer = planningSlice.reducer;

export const getIsLoading = (state: any) => state.planning.isLoading;
export const getError = (state: any) => state.planning.error;
export const getPlanningFromStore = (state: any) => state.planning.planning;
