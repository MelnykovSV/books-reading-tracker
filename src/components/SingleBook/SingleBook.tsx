import { Container } from './SingleBook.styled';
import { ReactComponent as BookIcon } from '../../images/icons/library.svg';

export const SingleBook = () => {
  return (
    <Container>
      <div className="single-book__title-container">
        <BookIcon />
        <p className="single-book__title-text">
          Scrum. A revolutionary method of project management.
        </p>
      </div>
      <dl className="single-book__list">
        <div className="single-book__list-item">
          <dt className="single-book__list-term">Author</dt>
          <dd className="single-book__list-def">Jeff Sutherland</dd>
        </div>
        <div className="single-book__list-item">
          <dt className="single-book__list-term">Year</dt>
          <dd className="single-book__list-def">2014</dd>
        </div>
        <div className="single-book__list-item">
          <dt className="single-book__list-term">Pages</dt>
          <dd className="single-book__list-def">25</dd>
        </div>
        <div className="single-book__list-item rating-container">
          <dt className="single-book__list-term">Rating</dt>
          <dd className="single-book__list-def">4</dd>
        </div>
      </dl>

      <button type="button">Resume</button>
    </Container>
  );
};
