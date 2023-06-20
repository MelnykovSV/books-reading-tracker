import { Container } from './LoginForm.styled';
import { Link } from 'react-router-dom';
import { ILoginSubmitHandler } from '../../interfaces';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ReactComponent as GoogleIcon } from '../../images/icons/google.svg';
export const LoginForm = ({ loginSubmitHandler }: ILoginSubmitHandler) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .matches(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/, 'Invalid format')
      .required('This field is required')
      .trim(),
    password: yup
      .string()
      .min(8, 'Minimum input length 8 symbols')
      .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/, 'Invalid format')
      .required('This field is required'),
  });

  const submitHandler = async (values: {
    email: string;
    password: string;
  }): Promise<void> => {
    const isValid = await schema.isValid(values);

    if (isValid) {
      const result = { ...values };
      loginSubmitHandler(result);
    }
  };

  return (
    <Container>
      <Formik
        onSubmit={submitHandler}
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
      >
        <FormikForm>
          <button type="button" className="google-button">
            <span className="google-button__icon-container">
              <GoogleIcon className="google-button__icon" />
            </span>
            <span className="google-button__text">Google</span>
          </button>

          <label htmlFor="login-form__email-input">
            <span className="login-form__input-label">
              Email <span>*</span>
            </span>

            <Field
              name="email"
              type="text"
              id="login-form__email-input"
              placeholder="your@email.com"
            />
            <span className="login-form__error-message-container">
              <ErrorMessage name="email" />
            </span>
          </label>
          <label htmlFor="login-form__password-input">
            <span className="login-form__input-label">
              Password <span>*</span>
            </span>
            <Field
              name="password"
              type="password"
              id="login-form__password-input"
              placeholder="Password"
            />
            <span className="login-form__error-message-container">
              <ErrorMessage name="password" />
            </span>
          </label>

          <button className="login-form__submit-button" type="submit">
            Login
          </button>

          <Link className="login-form__redirrect" to="/registration">
            Register
          </Link>
        </FormikForm>
      </Formik>
    </Container>
  );
};
