import { useState, useEffect } from 'react';
import { Container } from './MyTrainingResults.styled';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';
import { getPlanningFromStore } from '../../redux/planning/planningSlice';
import { nanoid } from 'nanoid';
import { getPlanningLoadingStatus } from '../../redux/planning/planningSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getPlanningStats } from '../../redux/planning/planningSlice';
import { updatePlanning } from '../../redux/planning/operations';

import { getCurrentBook } from '../../helpers';

import { useFormik } from 'formik';
import { finishPlanning } from '../../redux/planning/planningSlice';
import * as yup from 'yup';
import { IPlanningStat } from '../../interfaces';

export const MyTrainingResults = () => {
  const planning = useAppSelector(getPlanningFromStore);
  const status = useAppSelector(getPlanningLoadingStatus);
  const stats = useAppSelector(getPlanningStats);
  const dispatch = useAppDispatch();

  const [pagesLimit, setPagesLimit] = useState(0);
  const currentBook = getCurrentBook(planning.books);

  useEffect(() => {
    if (status === 'fulfilled') {
      if (currentBook) {
        setPagesLimit(currentBook.pagesTotal - currentBook.pagesFinished);
      } else {
        setPagesLimit(0);
        dispatch(finishPlanning('success'));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentBook, status]);

  const validationSchema = yup.object({
    pages: yup
      .number()
      .min(1, 'Please enter a valid value')
      .max(pagesLimit, `You have only ${pagesLimit} pages left in this book`)
      .required('This field is required'),
  });

  const formik = useFormik({
    initialValues: {
      pages: 0,
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);

      dispatch(updatePlanning(values));
      formik.resetForm();
    },
  });

  const statsHandler = (stats: IPlanningStat[]) => {
    const statsArray = [...Object.values(stats)];

    if (statsArray.length <= 5) {
      return statsArray;
    }

    return statsArray.filter((item, i, arr) => i + 1 > arr.length - 5);
  };

  const statsToShow = statsHandler(stats);

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Date" defaultValue={dayjs()} disabled />
        </LocalizationProvider>

        <TextField
          id="outlined-basic"
          label="Amount of pages"
          variant="outlined"
          type="number"
          name="pages"
          value={formik.values.pages}
          onChange={formik.handleChange}
          helperText={formik.touched.pages && formik.errors.pages}
        />

        <button type="submit">Add result</button>
      </form>

      <div className="results-container">
        <h3>Statistics</h3>
        {status === 'fulfilled'
          ? statsToShow.map(item => (
              <li key={nanoid()}>
                <p>{item.time}</p>
                <p>{item.pagesCount}</p>
              </li>
            ))
          : null}
      </div>
    </Container>
  );
};
