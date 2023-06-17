import { Container } from './RegistrationPage.styled';
import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import { useAppDispatch } from '../../redux/hooks';
import { signUp } from '../../redux/auth/operations';

const RegistrationPage = () => {
  const dispatch = useAppDispatch();

  const registrationSubmitHandler = ({ name, email, password }) => {
    dispatch(signUp({ name, email, password }));
  };

  return (
    <Container>
      RegistrationPage
      <RegistrationForm
        registrationSubmitHandler={registrationSubmitHandler}
      ></RegistrationForm>
    </Container>
  );
};

export default RegistrationPage;
