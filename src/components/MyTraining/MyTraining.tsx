import { Container } from './MyTraining.styled';

import { TrainingList } from '../TrainingList/TrainingList';

import dayjs from 'dayjs';
import { useState, useEffect } from 'react';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';
import { IBookData, IMyTrainingProps } from '../../interfaces';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import { getGoingToRead } from '../../redux/auth/authSlice';

import { createPlanning, getPlanning } from '../../redux/planning/operations';
import { getIsLoggedIn, getCurrentlyReading } from '../../redux/auth/authSlice';

// const initialState = [] as IBookData[];
const initialCurrentBook = {} as IBookData;

export const MyTraining = ({
  trainingBookList,
  startDate,
  endDate,
  updateTrainingBookList,
  updateStartDate,
  updateEndDate,
}: IMyTrainingProps) => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  console.log(trainingBookList);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getPlanning());
      console.log('something');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const getCurrentDate = () => {
    return dayjs().format('YYYY-MM-DD');
  };

  // const [trainingBookList, setTrainingBookList] = useState(initialState);
  // const [startDate, setStartDate] = useState(getCurrentDate());
  // const [endDate, setEndDate] = useState('');

  const [currentBook, setCurrentBook] = useState(initialCurrentBook);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const queryBody = {
      startDate,
      endDate,
      books: trainingBookList.map(item => item._id),
    };

    dispatch(createPlanning(queryBody));
    console.log(queryBody);
  };

  const goingToRead = useAppSelector(getGoingToRead);
  const currentlyReading = useAppSelector(getCurrentlyReading);

  const booksList = [
    ...goingToRead.map(item => ({ ...item, label: item.title })),
    ...currentlyReading.map(item => ({ ...item, label: item.title })),
  ];

  const addToTrainingBookListHandler = (bookData: IBookData) => {
    console.log('addToTrainingBookListHandler');
    if (bookData && !trainingBookList.find(item => item._id === bookData._id)) {
      const { title, author, publishYear, pagesTotal, _id, pagesFinished } =
        bookData;
      updateTrainingBookList([
        ...trainingBookList,
        { title, author, publishYear, pagesTotal, _id, pagesFinished },
      ]);
    }
  };

  const removeFromTrainingBookListHandler = (id: string) => {
    updateTrainingBookList(
      trainingBookList.filter((item: IBookData) => item._id !== id)
    );
  };

  return (
    <Container onSubmit={formSubmitHandler}>
      <h2>My training</h2>

      <div className="date-input-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Start"
            defaultValue={dayjs(getCurrentDate())}
            onChange={newValue => {
              if (newValue) {
                updateStartDate(newValue.format('YYYY-MM-DD'));
              }
            }}
            disabled
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Finish"
            onChange={newValue => {
              if (newValue) {
                updateEndDate(newValue.format('YYYY-MM-DD'));
              }
            }}
            disablePast
            minDate={dayjs().add(1, 'day')}
          />
        </LocalizationProvider>
      </div>
      <div className="books-input-container">
        <Autocomplete
          onChange={(event: any, book: IBookData | null) => {
            if (book) {
              console.log(book);
              setCurrentBook(book);
            }
          }}
          disablePortal
          isOptionEqualToValue={(option, value) => {
            return option._id === value._id;
          }}
          id="combo-box-demo"
          options={booksList}
          sx={{ width: 300 }}
          renderInput={params => (
            <TextField {...params} label="Choose books from the library " />
          )}
        />
        <button
          type="button"
          onClick={() => {
            if (currentBook) {
              addToTrainingBookListHandler(currentBook);
            }
          }}
        >
          Add
        </button>

        <button type="submit">Start training</button>
      </div>
      <TrainingList
        trainingList={trainingBookList}
        removeFromTrainingListHandler={removeFromTrainingBookListHandler}
      ></TrainingList>
    </Container>
  );
};
