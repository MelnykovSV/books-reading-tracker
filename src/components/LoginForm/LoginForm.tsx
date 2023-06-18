import { Container } from './LoginForm.styled';
import { Link } from 'react-router-dom';
import { ILoginSubmitHandler } from '../../interfaces';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as yup from 'yup';
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
          <label htmlFor="login-form__email-input">
            Email *
            <Field
              name="email"
              type="text"
              id="login-form__email-input"
              placeholder="your@email.com"
            />
            <span>
              <ErrorMessage name="email" />
            </span>
          </label>
          <label htmlFor="login-form__password-input">
            Password *
            <Field
              name="password"
              type="password"
              id="login-form__password-input"
              placeholder="Password"
            />
            <span>
              <ErrorMessage name="password" />
            </span>
          </label>
          <Link to="/registration">Register</Link>
          <button type="submit">Login</button>
        </FormikForm>
      </Formik>
      <p>LoginForm </p>
    </Container>
  );
};
