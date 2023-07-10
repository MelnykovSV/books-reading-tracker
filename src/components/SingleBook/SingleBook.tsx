import { useState, useEffect } from 'react';
import { Container } from './SingleBook.styled';
import { ReactComponent as BookIcon } from '../../images/icons/library.svg';
import { ISingleBookProps } from '../../interfaces';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { deleteBook } from '../../redux/auth/operations';
import { getFinishedReading } from '../../redux/auth/authSlice';
// import { Rating, Button } from '@mui/material';
import Rating from '@mui/material/Rating';

import { ReactComponent as DeleteIcon } from '../../images/icons/delete.svg';

export const SingleBook = ({
  title,
  author,
  publishYear,
  pagesTotal,
  id,
  status,
  modalOpenHandler,
  updateFeedbackBookId,
}: ISingleBookProps) => {
  const finishedReadingList = useAppSelector(getFinishedReading);

  const [currentRating, setCurrentRating] = useState(
    finishedReadingList.find(item => item._id === id)?.rating || 0
  );

  useEffect(() => {
    setCurrentRating(
      finishedReadingList.find(item => item._id === id)?.rating || 0
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finishedReadingList]);

  const dispatch = useAppDispatch();

  switch (status) {
    case 'read':
      return (
        <Container className="read">
          <div className="single-book__title-container">
            <BookIcon className="single-book__icon read" />
            <p className="single-book__title-text">{title}</p>
          </div>
          <dl className="single-book__list read">
            <div className="single-book__list-item author">
              <dt className="single-book__list-term">Author</dt>
              <dd className="single-book__list-def">{author}</dd>
            </div>
            <div className="single-book__list-item year">
              <dt className="single-book__list-term">Year</dt>
              <dd className="single-book__list-def">{publishYear}</dd>
            </div>
            <div className="single-book__list-item pages">
              <dt className="single-book__list-term">Pages</dt>
              <dd className="single-book__list-def">{pagesTotal}</dd>
            </div>
            <div className="single-book__list-item rating-container">
              <dt className="single-book__list-term">Rating</dt>
              <dd className="single-book__list-def">
                <Rating
                  name="size-small"
                  value={currentRating}
                  size="small"
                  readOnly
                />
              </dd>
            </div>
          </dl>

          <button
            type="button"
            className="single-book__resume-button"
            onClick={() => {
              if (updateFeedbackBookId && modalOpenHandler) {
                updateFeedbackBookId(id);
                modalOpenHandler();
              }
            }}
          >
            Resume
          </button>
          <button
            className="single-book__delete-button"
            onClick={() => {
              dispatch(deleteBook(id));
            }}
          >
            <DeleteIcon />
          </button>
        </Container>
      );
    case 'reading now':
      return (
        <Container>
          <div className="single-book__title-container">
            <BookIcon className="single-book__icon reading-now" />
            <p className="single-book__title-text">{title}</p>
          </div>
          <dl className="single-book__list reading-now">
            <div className="single-book__list-item author">
              <dt className="single-book__list-term">Author</dt>
              <dd className="single-book__list-def">{author}</dd>
            </div>
            <div className="single-book__list-item year">
              <dt className="single-book__list-term">Year</dt>
              <dd className="single-book__list-def">{publishYear}</dd>
            </div>
            <div className="single-book__list-item pages">
              <dt className="single-book__list-term">Pages</dt>
              <dd className="single-book__list-def">{pagesTotal}</dd>
            </div>
          </dl>
          <button
            className="single-book__delete-button"
            onClick={() => {
              dispatch(deleteBook(id));
            }}
          >
            <DeleteIcon />
          </button>
        </Container>
      );
    case 'going to read':
      return (
        <Container>
          <div className="single-book__title-container">
            <BookIcon className="single-book__icon going-to-read" />
            <p className="single-book__title-text">{title}</p>
          </div>
          <dl className="single-book__list going-to-read">
            <div className="single-book__list-item author ">
              <dt className="single-book__list-term">Author</dt>
              <dd className="single-book__list-def">{author}</dd>
            </div>
            <div className="single-book__list-item year">
              <dt className="single-book__list-term">Year</dt>
              <dd className="single-book__list-def">{publishYear}</dd>
            </div>
            <div className="single-book__list-item pages">
              <dt className="single-book__list-term">Pages</dt>
              <dd className="single-book__list-def">{pagesTotal}</dd>
            </div>
          </dl>

          <button
            className="single-book__delete-button"
            onClick={() => {
              dispatch(deleteBook(id));
            }}
          >
            <DeleteIcon />
          </button>
        </Container>
      );
  }
};
