import { Container } from './HomePage.styled';
import { BookForm } from '../../components/BookForm/BookForm';
import { SingleBook } from '../../components/SingleBook/SingleBook';

const HomePage = () => {
  return (
    <Container>
      <div className="container">
        {' '}
        <BookForm></BookForm>
        <SingleBook />
      </div>
    </Container>
  );
};

export default HomePage;
