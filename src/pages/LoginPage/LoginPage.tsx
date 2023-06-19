import { Container } from './LoginPage.styled';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { useAppDispatch } from '../../redux/hooks';
import { signIn } from '../../redux/auth/operations';

import { ISignInData } from '../../interfaces';

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const loginSubmitHandler = ({ email, password }: ISignInData) => {
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
