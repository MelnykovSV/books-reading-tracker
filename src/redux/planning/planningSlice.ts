import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { createPlanning, getPlanning } from './operations';
import { isError, isPending } from '../statusCheckers';

const initialState = {
  startDate: '',
  endDate: '',
  books: [
    // {
    //   title: '',
    //   author: '',
    //   publishYear: null,
    //   totalPages: null,
    //   pagesFinished: null,
    //   rating: null,
    //   feedback: '',
    //   _id: '',
    //   __v: null,
    // },
  ],
  duration: null,
  pagesPerDay: null,
  stats: {
    date: '',
    pagesCount: '',
  },
  _id: '',
  status: 'indle',

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
        state.startDate = action.payload.startDate;
        state.endDate = action.payload.endDate;
        state.books = action.payload.books;
        state.duration = action.payload.duration;
        state.pagesPerDay = action.payload.pagesPerDay;
        state.stats = { ...action.payload.stats };
        state.status = 'fulfilled';
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addCase<any>(
      getPlanning.fulfilled,
      (state, action: PayloadAction<any>) => {
        console.log('action');
        console.log(action);
        state.startDate = action.payload.planning.startDate;
        state.endDate = action.payload.planning.endDate;
        state.books = action.payload.planning.books;
        state.duration = action.payload.planning.duration;
        state.pagesPerDay = action.payload.planning.pagesPerDay;
        state.stats = { ...action.payload.planning.stats };
        state.status = 'fulfilled';
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addMatcher(isPending, state => {
      state.status = 'pending';
      state.isLoading = true;
    });
    builder.addMatcher(isError, (state, action) => {
      state.status = 'rejected';
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export const planningReducer = planningSlice.reducer;

export const getIsLoading = (state: any) => state.planning.isLoading;
export const getError = (state: any) => state.planning.error;
export const getPlanningFromStore = (state: any) => state.planning;
export const getStartDate = (state: any) => state.planning.startDate;
export const getEndDate = (state: any) => state.planning.endDate;
