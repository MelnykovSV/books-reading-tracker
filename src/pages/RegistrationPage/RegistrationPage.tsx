import { Container } from './RegistrationPage.styled';
import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import { useAppDispatch } from '../../redux/hooks';
import { signUp } from '../../redux/auth/operations';

import { ISignUpData } from '../../interfaces';

const RegistrationPage = () => {
  const dispatch = useAppDispatch();

  const registrationSubmitHandler = ({
    name,
    email,
    password,
  }: ISignUpData) => {
    dispatch(signUp({ name, email, password }));
  };

  return (
    <Container className="container">
      <div className="form-container">
        <RegistrationForm
          registrationSubmitHandler={registrationSubmitHandler}
        ></RegistrationForm>
      </div>

      <div className="text-container">
        <div className="text">
          <h2>Books Reading</h2>
          <b>Will help you to</b>
          <ul>
            <li>Create your goal faster and proceed to read</li>
            <li>Divide process proportionally for each day</li>
            <li>Track your success</li>
          </ul>

          <b>Will help you to</b>
          <ul>
            <li>Pose your own independent point of view</li>
            <li>Improve your professional skills according to new knowledge</li>
            <li>Become an interesting interlocutor</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default RegistrationPage;
