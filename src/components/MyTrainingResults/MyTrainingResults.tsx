import { useState } from 'react';
import { Container } from './MyTrainingResults.styled';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';
import { getPlanningFromStore } from '../../redux/planning/planningSlice';

import axios from 'axios';
import { getPlanningLoadingStatus } from '../../redux/planning/planningSlice';
import { useAppSelector } from '../../redux/hooks';

export const MyTrainingResults = () => {
  const [readingDate, setReadingDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [pagesAmount, setPagesAmount] = useState(0);

  const planning = useAppSelector(getPlanningFromStore);
  const status = useAppSelector(getPlanningLoadingStatus);
  console.log('planning');
  console.log(planning.stats);

  const statsHandler = stats => {
    const statsArray = [...Object.values(stats)];

    if (statsArray.length <= 5) {
      return statsArray;
    }

    return statsArray.filter((item, i, arr) => i + 1 > arr.length - 5);
  };

  if (status === 'fulfilled') {
    console.log(statsHandler(planning.stats));
  }

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

      <div className="resulte-container"></div>
    </Container>
  );
};
