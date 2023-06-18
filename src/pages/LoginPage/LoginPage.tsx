import { Container } from './LoginPage.styled';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { useAppDispatch } from '../../redux/hooks';
import { signIn } from '../../redux/auth/operations';

import { ISignInData } from '../../interfaces';

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const loginSubmitHandler = async ({ email, password }: ISignInData) => {
    await dispatch(signIn({ email, password }));
    console.log(dispatch(signIn({ email, password })));
  };

  return (
    <Container>
      LoginPage
      <LoginForm loginSubmitHandler={loginSubmitHandler}></LoginForm>
    </Container>
  );
};

export default LoginPage;
