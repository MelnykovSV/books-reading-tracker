import { Container } from './RegistrationFrom.styled';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import { IRegistrationSubmitHandler } from '../../interfaces';
import { ReactComponent as GoogleIcon } from '../../images/icons/google.svg';
export const RegistrationForm = ({
  registrationSubmitHandler,
}: IRegistrationSubmitHandler) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'Minimum input length 3 symbols')
      .matches(/^[a-zA-Z0-9]+$/, 'Invalid format')
      .required('This field is required')
      .trim(),
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
    name: string;
    email: string;
    password: string;
  }): Promise<void> => {
    const isValid = await schema.isValid(values);

    if (isValid) {
      const result = { ...values };
      registrationSubmitHandler(result);
    }
  };

  return (
    <Container>
      <Formik
        onSubmit={submitHandler}
        initialValues={{ name: '', email: '', password: '' }}
      >
        <FormikForm>
          <button type="button" className="google-button">
            <span className="google-button__icon-container">
              <GoogleIcon className="google-button__icon" />
            </span>
            <span className="google-button__text">Google</span>
          </button>
          <label htmlFor="registration-form__name-input">
            Name:
            <Field
              name="name"
              type="text"
              id="registration-form__name-input"
              placeholder="..."
            />
            <span>
              <ErrorMessage name="name" />
            </span>
          </label>
          <label htmlFor="registration-form__email-input">
            Email:
            <Field
              name="email"
              type="text"
              id="registration-form__email-input"
              placeholder="your@email.com"
            />
            <span>
              <ErrorMessage name="email" />
            </span>
          </label>
          <label htmlFor="registration-form__password-input">
            Password:
            <Field
              name="password"
              type="password"
              id="registration-form__password-input"
              placeholder="..."
            />
            <span>
              <ErrorMessage name="password" />
            </span>
          </label>
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
          <button type="submit">Register</button>
        </FormikForm>
      </Formik>
    </Container>
  );
};
