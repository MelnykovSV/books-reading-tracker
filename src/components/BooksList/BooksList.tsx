import { Container } from './BooksList.styled';
import { useAppSelector } from '../../redux/hooks';
import {
  getGoingToRead,
  getCurrentlyReading,
  getFinishedReading,
} from '../../redux/auth/authSlice';
import { SingleBook } from '../SingleBook/SingleBook';
import { IBookData, IBooksListProps } from '../../interfaces';

export const BooksList = ({
  status,
  updateFeedbackBookId,
  modalOpenHandler,
}: IBooksListProps) => {
  const goingToRead = useAppSelector(getGoingToRead);
  const currentlyReading = useAppSelector(getCurrentlyReading);
  const finishedReading = useAppSelector(getFinishedReading);

  switch (status) {
    case 'going to read':
      return (
        <Container>
          <h3>Going to read</h3>
          <div className="books-list__body">
            <div className="books-list__header">
              <p>Book title</p>
              <p>Author</p>
              <p>Year</p>
              <p>Pages</p>
            </div>
            <ul className="books-list__main">
              {goingToRead.map(
                ({
                  title,
                  author,
                  publishYear,
                  pagesTotal,
                  _id,
                }: IBookData) => (
                  <SingleBook
                    key={_id}
                    title={title}
                    author={author}
                    publishYear={publishYear}
                    pagesTotal={pagesTotal}
                    id={_id}
                    status={status}
                  />
                )
              )}
            </ul>
          </div>
        </Container>
      );

    case 'reading now':
      return (
        <Container>
          <h3>Reading now</h3>
          <div className="books-list__body">
            <div className="books-list__header">
              <p>Book title</p>
              <p>Author</p>
              <p>Year</p>
              <p>Pages</p>
            </div>
            <ul className="books-list__main">
              {currentlyReading.map(
                ({
                  title,
                  author,
                  publishYear,
                  pagesTotal,
                  _id,
                }: IBookData) => (
                  <SingleBook
                    key={_id}
                    title={title}
                    author={author}
                    publishYear={publishYear}
                    pagesTotal={pagesTotal}
                    id={_id}
                    status={status}
                  />
                )
              )}
            </ul>
          </div>
        </Container>
      );

    case 'read':
      return (
        <Container>
          <h3>Already read</h3>
          <div className="books-list__body">
            <div className="books-list__header read">
              <p>Book title</p>
              <p>Author</p>
              <p>Year</p>
              <p>Pages</p>
              <p className="header-rating">Rating</p>
            </div>
            <ul className="books-list__main">
              {finishedReading.map(
                ({
                  title,
                  author,
                  publishYear,
                  pagesTotal,
                  _id,
                }: IBookData) => (
                  <SingleBook
                    key={_id}
                    title={title}
                    author={author}
                    publishYear={publishYear}
                    pagesTotal={pagesTotal}
                    id={_id}
                    status={status}
                    updateFeedbackBookId={updateFeedbackBookId}
                    modalOpenHandler={modalOpenHandler}
                  />
                )
              )}
            </ul>
          </div>
        </Container>
      );
  }
};
