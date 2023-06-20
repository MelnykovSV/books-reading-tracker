import { Container } from './BookForm.styled';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { IBookFormData } from '../../interfaces';
import { ReactComponent as BackIcon } from '../../images/icons/back.svg';

export const BookForm = () => {
  const schema = yup.object().shape({
    title: yup
      .string()
      .min(3, 'Minimum input length 3 symbols')
      .matches(/^[a-zA-Z0-9]+$/, 'Invalid format')
      .required('This field is required')
      .trim(),
    author: yup
      .string()
      .min(3, 'Minimum input length 3 symbols')
      .matches(/^[a-zA-Z0-9]+$/, 'Invalid format')
      .required('This field is required')
      .trim(),
    date: yup
      .string()
      .min(3, 'Minimum input length 3 symbols')
      .matches(/^[a-zA-Z0-9]+$/, 'Invalid format')
      .required('This field is required')
      .trim(),
    pages: yup
      .string()
      .min(3, 'Minimum input length 3 symbols')
      .matches(/^[a-zA-Z0-9]+$/, 'Invalid format')
      .required('This field is required')
      .trim(),
  });

  const submithandler = async (values: IBookFormData): Promise<void> => {
    const isValid = await schema.isValid(values);

    if (isValid) {
      const result = { ...values };
      console.log(result);
    }
  };
  return (
    <Container className="book-form-container">
      <Formik
        initialValues={{ title: '', author: '', date: '', pages: '' }}
        onSubmit={submithandler}
        validationSchema={schema}
        className="book-form"
      >
        <FormikForm>
          <button className="book-form__close-button">
            <BackIcon />
          </button>
          <label
            htmlFor="book-form__book-title-input"
            className="book-form__book-title-label"
          >
            <span className="book-form__label-text">Book title</span>

            <Field
              name="title"
              type="text"
              id="book-form__book-title-input"
              placeholder="..."
            />
            <span className="book-form__error-message-container">
              <ErrorMessage name="title" />
            </span>
          </label>

          <label
            htmlFor="book-form__book-author-input"
            className="book-form__book-author-label"
          >
            <span className="book-form__label-text">Author</span>

            <Field
              name="author"
              type="text"
              id="book-form__book-author-input"
              placeholder="..."
            />
            <span className="book-form__error-message-container">
              <ErrorMessage name="author" />
            </span>
          </label>

          <label
            htmlFor="book-form__book-date-input"
            className="book-form__book-date-label"
          >
            <span className="book-form__label-text">Publication date</span>

            <Field
              name="date"
              type="text"
              id="book-form__book-date-input"
              placeholder="..."
            />
            <span className="book-form__error-message-container">
              <ErrorMessage name="date" />
            </span>
          </label>

          <label
            htmlFor="book-form__book-pages-input"
            className="book-form__book-pages-label"
          >
            <span className="book-form__label-text">Amount of pages</span>

            <Field
              name="pages"
              type="text"
              id="book-form__book-pages-input"
              placeholder="..."
            />
            <span className="book-form__error-message-container">
              <ErrorMessage name="pages" />
            </span>
          </label>

          <button className="add-book-button" type="submit">
            Add
          </button>
        </FormikForm>
      </Formik>
    </Container>
  );
};
