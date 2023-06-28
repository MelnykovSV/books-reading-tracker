import { useRef, useState } from 'react';
import { Container } from './TrainingForm.styled';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ITrainingForm } from '../../interfaces';
import { useAppSelector } from '../../redux/hooks';

import { getGoingToRead } from '../../redux/auth/authSlice';

export const TrainingForm = ({ addToTrainingListHandler }: ITrainingForm) => {
  const [book, setBook] = useState();

  const goingToRead = useAppSelector(getGoingToRead);
  console.log(goingToRead);

  const booksList = goingToRead.map(item => ({ ...item, label: item.title }));
  console.log(booksList);

  return (
    <Container>
      <div className="date-input-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Start" />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Finish" />
        </LocalizationProvider>
      </div>
      <div className="books-input-container">
        <Autocomplete
          ///TODO: ДЕЛАТЬ ЭТО ПО НАЖАТИЮ КНОПКИ А НЕ ПО ИЗМЕНЕНИЮ ИНПУТА!
          onChange={(
            event: any,
            {
              _id,
              title,
              author,
              publishYear,
              pagesTotal,
              pagesFinished,
            }: string | null
          ) => {
            console.log({
              _id,
              title,
              author,
              publishYear,
              pagesTotal,
              pagesFinished,
            });
            setBook('123');

            // addToTrainingListHandler({
            //   _id,
            //   title,
            //   author,
            //   publishYear,
            //   pagesTotal,
            //   pagesFinished,
            // });
            // setBook({
            //   _id,
            //   title,
            //   author,
            //   publishYear,
            //   pagesTotal,
            //   pagesFinished,
            // });

            // console.log(book);
          }}
          disablePortal
          isOptionEqualToValue={(option, value) => option._id === value._id}
          id="combo-box-demo"
          options={booksList}
          sx={{ width: 300 }}
          renderInput={params => (
            <TextField {...params} label="Choose books from the library " />
          )}
        />
        <button type="button">Add</button>

        <button type="submit">Start training</button>
      </div>
    </Container>
  );
};
