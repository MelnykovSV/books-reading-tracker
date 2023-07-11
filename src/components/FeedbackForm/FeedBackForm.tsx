import { Container } from './FeedbackForm.styled';
import { useFormik } from 'formik';
import { Rating } from '@mui/material';
import { IFeedbackFormProps } from '../../interfaces';
import { updateBook } from '../../redux/auth/operations';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getFinishedReading } from '../../redux/auth/authSlice';

export const FeedbackForm = ({ id, modalCloseHandler }: IFeedbackFormProps) => {
  const dispatch = useAppDispatch();
  const finishedReadingList = useAppSelector(getFinishedReading);

  const formik = useFormik({
    initialValues: {
      rating: finishedReadingList.find(item => item._id === id)?.rating || 0,
      feedback:
        finishedReadingList.find(item => item._id === id)?.feedback || '',
    },
    onSubmit: values => {
      dispatch(updateBook({ id, values }));
      formik.resetForm();
      modalCloseHandler();
    },
  });

  return (
    <Container onSubmit={formik.handleSubmit}>
      <label htmlFor="single-book-rating" className="form-label">
        Choose rating of the book
      </label>
      <Rating
        name="rating"
        id="single-book-rating"
        className="rating"
        onChange={formik.handleChange}
        value={Number(formik.values.rating)}
      ></Rating>
      <label htmlFor="single-book-feedback" className="form-label">
        Resume
      </label>

      <textarea
        name="feedback"
        id="single-book-feedback"
        className="feedback-textarea"
        onChange={formik.handleChange}
        value={formik.values.feedback}
        required
      ></textarea>

      <div className="buttons-container">
        <button
          type="button"
          className="form-button button-back"
          onClick={modalCloseHandler}
        >
          Back
        </button>
        <button type="submit" className="form-button button-save">
          Save
        </button>
      </div>
    </Container>
  );
};
