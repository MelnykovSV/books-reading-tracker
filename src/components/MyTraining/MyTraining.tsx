import { Container } from './MyTraining.styled';
// import { TrainingForm } from '../TrainingFrom/TrainingForm';
import { TrainingList } from '../TrainingList/TrainingList';
import { IMyTrainingProps } from '../../interfaces';
import dayjs from 'dayjs';
import { useState } from 'react';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ITrainingForm, IBookData } from '../../interfaces';
import { useAppSelector } from '../../redux/hooks';

import { getGoingToRead } from '../../redux/auth/authSlice';
import { useForm } from 'react-hook-form';

const initialState = [] as IBookData[];
export const MyTraining = ({
  trainingList,
  addToTrainingListHandler,
  removeFromTrainingListHandler,
  formSubmitHandler,
}: IMyTrainingProps) => {
  const getCurrentDate = () => {
    const date = new Date();

    return `${date.getFullYear()}-${date.getUTCMonth() + 1}-${date.getDate()}`;
  };

  const [trainingBookList, setTrainingBookList] = useState(initialState);
  const [startDate, setStartDate] = useState(getCurrentDate());
  const [endDate, setEndDate] = useState('');
  const [currentBook, setCurrentBook] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const goingToRead = useAppSelector(getGoingToRead);

  const booksList = goingToRead.map(item => ({ ...item, label: item.title }));

  const addToTrainingBookListHandler = (bookData: IBookData) => {
    console.log('addToTrainingBookListHandler');
    if (bookData && !trainingBookList.find(item => item._id === bookData._id)) {
      const { title, author, publishYear, pagesTotal, _id, pagesFinished } =
        bookData;
      setTrainingBookList([
        ...trainingBookList,
        { title, author, publishYear, pagesTotal, _id, pagesFinished },
      ]);
    }
  };

  // function addToTrainingBookListHandler(bookData: IBookData) {
  //   console.log('addToTrainingBookListHandler');
  //   if (bookData && !trainingBookList.find(item => item._id === bookData._id)) {
  //     const { title, author, publishYear, pagesTotal, _id, pagesFinished } =
  //       bookData;
  //     setTrainingBookList([
  //       ...trainingBookList,
  //       { title, author, publishYear, pagesTotal, _id, pagesFinished },
  //     ]);
  //   }
  // }

  const removeFromTrainingBookListHandler = (id: string) => {
    setTrainingBookList(
      trainingBookList.filter((item: IBookData) => item._id !== id)
    );
  };

  return (
    <Container onSubmit={handleSubmit(formSubmitHandler)}>
      <h2>My training</h2>

      <div className="date-input-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Start"
            defaultValue={dayjs(getCurrentDate())}
            onChange={newValue =>
              console.log(`${newValue.$y}-${newValue.$M + 1}-${newValue.$D}`)
            }
            disabled
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Finish"
            onChange={newValue =>
              setEndDate(`${newValue.$y}-${newValue.$M + 1}-${newValue.$D}`)
            }
            disablePast
            minDate={dayjs().add(1, 'day')}
          />
        </LocalizationProvider>
      </div>
      <div className="books-input-container">
        <Autocomplete
          ///TODO: ДЕЛАТЬ ЭТО ПО НАЖАТИЮ КНОПКИ А НЕ ПО ИЗМЕНЕНИЮ ИНПУТА!
          onChange={(event: any, book: IBookData | null) => {
            // if (book) {
            console.log(book);
            setCurrentBook(book);
            // }
          }}
          ref={ref}
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
            addToTrainingBookListHandler(currentBook);
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
