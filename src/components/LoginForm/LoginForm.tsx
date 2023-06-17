import { Container } from './LoginForm.styled';
import { Link } from 'react-router-dom';
export const LoginForm = ({ loginSubmitHandler }) => {
  return (
    <Container
      onSubmit={e => {
        e.preventDefault();
        const { email, password } = e.target;

        loginSubmitHandler({
          email: email.value,
          password: password.value,
        });
      }}
    >
      <p>LoginForm </p>

      <label htmlFor="login-form__email-input">
        Email:
        <input name="email" type="text" id="login-form__email-input" />
      </label>
      <label htmlFor="login-form__password-input">
        Password:
        <input
          name="password"
          type="password"
          id="login-form__password-input"
        />
      </label>
      <Link to="/registration">Register</Link>
      <button type="submit">Login</button>
    </Container>
  );
};
