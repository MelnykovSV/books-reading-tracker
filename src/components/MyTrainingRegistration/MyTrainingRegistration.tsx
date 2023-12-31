import { Container } from './MyTrainingRegistration.styled';

import { TrainingList } from '../TrainingList/TrainingList';

import dayjs from 'dayjs';
import { useState } from 'react';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';
import { IBookData, IMyTrainingProps } from '../../interfaces';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import { getGoingToRead } from '../../redux/auth/authSlice';

import { createPlanning } from '../../redux/planning/operations';
import { getCurrentlyReading } from '../../redux/auth/authSlice';
import useMediaQuery from '@mui/material/useMediaQuery';

// const initialState = [] as IBookData[];
// const initialCurrentBook = {} as IBookData;

export const MyTrainingRegistration = ({
  trainingBookList,
  startDate,
  endDate,
  updateTrainingBookList,
  updateStartDate,
  updateEndDate,
  updateIsFormSubmitted,
}: IMyTrainingProps) => {
  // const isLoggedIn = useAppSelector(getIsLoggedIn);
  const matches = useMediaQuery('(min-width:768px)');

  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     dispatch(getPlanning());
  //     console.log('something');
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isLoggedIn]);

  const getCurrentDate = () => {
    return dayjs().format('YYYY-MM-DD');
  };

  // const [trainingBookList, setTrainingBookList] = useState(initialState);
  // const [startDate, setStartDate] = useState(getCurrentDate());
  // const [endDate, setEndDate] = useState('');

  const [currentBook, setCurrentBook] = useState<IBookData | null>(null);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const queryBody = {
      startDate,
      endDate,
      books: trainingBookList.map(item => item._id),
    };

    dispatch(createPlanning(queryBody));
    // dispatch(updateBooksAfterPlanningCreation(planningBooks));
    updateIsFormSubmitted(true);
  };

  const goingToRead = useAppSelector(getGoingToRead);
  const currentlyReading = useAppSelector(getCurrentlyReading);

  const booksList = [
    ...goingToRead.map(item => ({ ...item, label: item.title })),
    ...currentlyReading.map(item => ({ ...item, label: item.title })),
  ];

  const addToTrainingBookListHandler = (bookData: IBookData) => {
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

  // useEffect(() => {
  //   window.addEventListener('beforeunload', alertUser)
  //   window.addEventListener('unload', handleEndConcert)
  //   return () => {
  //     window.removeEventListener('beforeunload', alertUser)
  //     window.removeEventListener('unload', handleEndConcert)
  //   }
  // }, [])

  // const handleEndConcert = async () => {
  //   await fetcher({
  //     url: endConcert(concert.id),
  //     method: 'PUT'
  //   })
  // }

  return (
    <Container onSubmit={formSubmitHandler}>
      <h2>My training</h2>

      <div className="date-input-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            slotProps={{ textField: { size: 'small' } }}
            label="Start"
            className="datepicker"
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
            slotProps={{ textField: { size: 'small' } }}
            label="Finish"
            className="datepicker"
            onChange={newValue => {
              if (newValue) {
                updateEndDate(newValue.format('YYYY-MM-DD'));
              }
            }}
            disablePast
            minDate={dayjs().add(1, 'day')}
            maxDate={dayjs().add(999, 'day')}
          />
        </LocalizationProvider>
      </div>
      <div className="books-input-container">
        <Autocomplete
          size="small"
          className="books-autocomplete"
          onChange={(event: any, book: IBookData | null) => {
            if (book) {
              setCurrentBook(book);
            }
          }}
          value={currentBook}
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
          className="button-add"
          type="button"
          onClick={() => {
            if (currentBook) {
              addToTrainingBookListHandler(currentBook);
              setCurrentBook(null);
            }
          }}
        >
          Add
        </button>
      </div>

      {
        matches ? (
          <TrainingList
            trainingList={trainingBookList}
            removeFromTrainingListHandler={removeFromTrainingBookListHandler}
          ></TrainingList>
        ) : null
        // <MobileTrainingBooksList
        //   type="registration"
        //   trainingList={trainingBookList}
        //   removeFromTrainingListHandler={removeFromTrainingBookListHandler}
        // />
      }

      {trainingBookList.length && matches ? (
        <button className="button-submit" type="submit">
          Start training
        </button>
      ) : null}
    </Container>
  );
};
