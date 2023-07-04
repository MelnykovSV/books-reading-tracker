import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { createPlanning, getPlanning, updatePlanning } from './operations';
import { isError, isPending } from '../statusCheckers';

import { getCurrentBook } from '../../helpers';
import { IPlanningSlice } from '../../interfaces';

const initialState = {
  startDate: '',
  endDate: '',
  books: [],
  duration: null,
  pagesPerDay: null,
  stats: [],
  _id: '',
  status: 'idle',
  planningStatus: null,
  isLoading: false,
  error: null,
} as IPlanningSlice;

const planningSlice = createSlice({
  name: 'planning',
  initialState: initialState,
  reducers: {
    finishPlanning(state, action: PayloadAction<'fail' | 'success'>) {
      switch (action.payload) {
        case 'success':
          state.planningStatus = action.payload;
          console.log('SUCCESS');
          break;

        case 'fail':
          state.planningStatus = action.payload;
          console.log('FAIL');
          break;
      }
    },
    deletePlanning(state) {
      state.planningStatus = 'none';
    },
  },
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
        state._id = action.payload._id;
        state.status = 'fulfilled';
        state.planningStatus = 'active';
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
        state._id = action.payload.planning._id;
        state.status = 'fulfilled';
        state.planningStatus = 'active';
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addCase<any>(
      updatePlanning.fulfilled,
      (state, action: PayloadAction<any>) => {
        console.log('action');
        console.log(action);

        const statsArray = action.payload.planning.stats;

        state.stats = statsArray;

        getCurrentBook(state.books).pagesFinished +=
          statsArray[statsArray.length - 1].pagesCount;
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

export const { finishPlanning, deletePlanning } = planningSlice.actions;

export const getIsLoading = (state: any) => state.planning.isLoading;
export const getError = (state: any) => state.planning.error;
export const getPlanningFromStore = (state: any) => state.planning;
export const getStartDate = (state: any) => state.planning.startDate;
export const getEndDate = (state: any) => state.planning.endDate;
export const getPlanningLoadingStatus = (state: any) => state.planning.status;

export const getPlanningStats = (state: any) => state.planning.stats;
export const getPlanningId = (state: any) => state.planning._id;
export const getPlanningBooks = (state: any) => state.planning.books;

export const getPlanningStatus = (state: any) => state.planning.planningStatus;
