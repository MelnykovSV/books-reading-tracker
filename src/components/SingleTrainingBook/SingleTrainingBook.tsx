import { Container } from './SingleTrainingBook.styled';

import { CustomCheckboxReadonly } from '../CustomCheckbox/CustomCheckboxReadonly';
import { ISingleTrainingBookProps } from '../../interfaces';
import { ReactComponent as DeleteIcon } from '../../images/icons/delete.svg';
import { ReactComponent as BookIcon } from '../../images/icons/library.svg';

export const SingleTrainingBook = ({
  title,
  author,
  publishYear,
  pagesTotal,
  pagesFinished,
  _id,
  type,
  removeFromTrainingListHandler,
}: ISingleTrainingBookProps) => {
  switch (type) {
    case 'active':
      return (
        <Container className="single-training-book active">
          <div className="single-training-book__title-container">
            <CustomCheckboxReadonly isChecked={pagesTotal === pagesFinished} />
            <h3 className="single-training-book__title">{title}</h3>
          </div>

          <dl className="single-training-book__list">
            <dt className="single-training-book__list-term">Author:</dt>
            <dd className="single-training-book__list-description">{author}</dd>

            <dt className="single-training-book__list-term">Year:</dt>
            <dd className="single-training-book__list-description">
              {publishYear}
            </dd>

            <dt className="single-training-book__list-term">Pages:</dt>
            <dd className="single-training-book__list-description">
              {pagesTotal}
            </dd>
          </dl>
        </Container>
      );
    case 'registration':
      return (
        <Container className="single-training-book registration">
          <div className="single-training-book__title-container">
            <BookIcon className="single-book__icon read" />
            <h3 className="single-training-book__title">{title}</h3>
            <button
              className="single-training-book__delete-button"
              onClick={() => {
                if (removeFromTrainingListHandler) {
                  removeFromTrainingListHandler(_id);
                }
                //   dispatch(deleteBook(id));
              }}
            >
              <DeleteIcon />
            </button>
          </div>

          <dl className="single-training-book__list">
            <dt className="single-training-book__list-term">Author:</dt>
            <dd className="single-training-book__list-description">{author}</dd>

            <dt className="single-training-book__list-term">Year:</dt>
            <dd className="single-training-book__list-description">
              {publishYear}
            </dd>

            <dt className="single-training-book__list-term">Pages:</dt>
            <dd className="single-training-book__list-description">
              {pagesTotal}
            </dd>
          </dl>
        </Container>
      );
  }
};
