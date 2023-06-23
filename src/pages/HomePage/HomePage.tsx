import { Container } from './HomePage.styled';
import { BookForm } from '../../components/BookForm/BookForm';
import { SingleBook } from '../../components/SingleBook/SingleBook';

import { BooksList } from '../../components/BooksList/BooksList';

const HomePage = () => {
  return (
    <Container>
      <div className="container">
        {' '}
        <BookForm></BookForm>
        <BooksList status="read" />
        <BooksList status="reading now" />
        <BooksList status="going to read" />
      </div>
    </Container>
  );
};

export default HomePage;
