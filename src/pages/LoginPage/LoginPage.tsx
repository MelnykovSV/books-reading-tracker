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
    <Container className="container">
      <div className="form-container">
        <LoginForm loginSubmitHandler={loginSubmitHandler}></LoginForm>
      </div>

      <div className="text-container">
        <div className="text">
          <b>“</b>
          <p className="text-body">
            Books are the ships of thoughts, wandering through the waves of
            time.
          </p>
          <p className="text-author">Francis Bacon</p>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
