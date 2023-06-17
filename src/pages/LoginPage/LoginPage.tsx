import { Container } from './LoginPage.styled';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { useAppDispatch } from '../../redux/hooks';
import { signIn } from '../../redux/auth/operations';

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const loginSubmitHandler = ({ email, password }) => {
    dispatch(signIn({ email, password }));
  };

  return (
    <Container>
      LoginPage
      <LoginForm loginSubmitHandler={loginSubmitHandler}></LoginForm>
    </Container>
  );
};

export default LoginPage;
