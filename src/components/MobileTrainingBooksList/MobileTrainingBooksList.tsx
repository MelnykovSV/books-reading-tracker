import { Container } from './MobileTrainingBooksList.styled';
import { useAppSelector } from '../../redux/hooks';
import { getPlanningBooks } from '../../redux/planning/planningSlice';
// import { SingleBook } from '../SingleBook/SingleBook';
import { SingleTrainingBook } from '../SingleTrainingBook/SingleTrainingBook';
import { IBookData, IMobileTrainingBooksListProps } from '../../interfaces';

export const MobileTrainingBooksList = ({
  type,
  trainingList,
  removeFromTrainingListHandler,
}: IMobileTrainingBooksListProps) => {
  const planningBooks = useAppSelector(getPlanningBooks);

  switch (type) {
    case 'active':
      return (
        <Container>
          {planningBooks.map(
            ({
              title,
              author,
              publishYear,
              pagesTotal,
              pagesFinished,
              _id,
            }: IBookData) => {
              return (
                <SingleTrainingBook
                  title={title}
                  author={author}
                  publishYear={publishYear}
                  pagesTotal={pagesTotal}
                  pagesFinished={pagesFinished}
                  _id={_id}
                  type={type}
                  key={_id}
                />
              );
            }
          )}
        </Container>
      );
    case 'registration':
      if (trainingList?.length === 0) {
        return (
          <Container className="empty-table">
            <SingleTrainingBook
              title=""
              author=""
              publishYear={0}
              pagesTotal={0}
              pagesFinished={0}
              _id=""
              key=""
              type={type}
              removeFromTrainingListHandler={removeFromTrainingListHandler}
            />
          </Container>
        );
      }
      return (
        <Container>
          {trainingList?.map(
            ({
              title,
              author,
              publishYear,
              pagesTotal,
              pagesFinished,
              _id,
            }: IBookData) => {
              return (
                <SingleTrainingBook
                  title={title}
                  author={author}
                  publishYear={publishYear}
                  pagesTotal={pagesTotal}
                  pagesFinished={pagesFinished}
                  _id={_id}
                  key={_id}
                  type={type}
                  removeFromTrainingListHandler={removeFromTrainingListHandler}
                />
              );
            }
          )}
        </Container>
      );
  }
};
