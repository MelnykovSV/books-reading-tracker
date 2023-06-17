import { Container } from './RegistrationFrom.styled';
import { Link } from 'react-router-dom';
export const RegistrationForm = ({ registrationSubmitHandler }) => {
  return (
    <Container
      onSubmit={e => {
        e.preventDefault();

        const { name, email, password } = e.target;

        registrationSubmitHandler({
          name: name.value,
          email: email.value,
          password: password.value,
        });
      }}
    >
      <h2>RegistrationForm</h2>
      <label htmlFor="registration-form__name-input">
        Name:
        <input name="name" type="text" id="registration-form__name-input" />
      </label>
      <label htmlFor="registration-form__email-input">
        Email:
        <input name="email" type="text" id="registration-form__email-input" />
      </label>
      <label htmlFor="registration-form__password-input">
        Password:
        <input
          name="password"
          type="password"
          id="registration-form__password-input"
        />
      </label>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
      <button type="submit">Register</button>
    </Container>
  );
};
