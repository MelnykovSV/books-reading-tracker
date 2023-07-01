import { useState } from 'react';
import { Container } from './MyTrainingResults.styled';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';

import axios from 'axios';

export const MyTrainingResults = () => {
  const [readingDate, setReadingDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [pagesAmount, setPagesAmount] = useState(0);

  return (
    <Container>
      <form
        onSubmit={async e => {
          e.preventDefault();
          const response = await axios.patch('/planning', {
            pages: pagesAmount,
          });
          console.log(response);
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date"
            defaultValue={dayjs(readingDate)}
            onChange={newValue => {
              if (newValue) {
                setReadingDate(newValue.format('YYYY-MM-DD'));
                console.log(newValue.format('YYYY-MM-DD'));
              }
            }}
          />
        </LocalizationProvider>

        <TextField
          id="outlined-basic"
          label="Amount of pages"
          variant="outlined"
          type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(e.target.value);
            setPagesAmount(Number(e.target.value));
          }}
        />

        <button type="submit">Add result</button>
      </form>
    </Container>
  );
};
