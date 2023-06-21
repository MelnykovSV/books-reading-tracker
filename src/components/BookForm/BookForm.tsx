import { Container } from './BookForm.styled';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { IBookFormData } from '../../interfaces';
import { ReactComponent as BackIcon } from '../../images/icons/back.svg';
import { useAppDispatch } from '../../redux/hooks';
import { addBook } from '../../redux/auth/operations';
import { IFormikResetForm } from '../../interfaces';

export const BookForm = () => {
  const dispatch = useAppDispatch();
  const schema = yup.object().shape({
    title: yup
      .string()
      .min(3, 'Minimum input length 3 symbols')
      .required('This field is required')
      .trim(),
    author: yup
      .string()
      .min(3, 'Minimum input length 3 symbols')
      .matches(/^[a-zA-Z0-9 ]+$/, 'Invalid format')
      .required('This field is required')
      .trim(),
    publishYear: yup
      .string()
      .matches(/^[0-9]+$/, 'Invalid format')
      .required('This field is required')
      .trim(),
    pagesTotal: yup
      .string()
      .matches(/^[0-9]+$/, 'Invalid format')
      .required('This field is required')
      .trim(),
  });

  const submithandler = async (
    values: IBookFormData,
    { resetForm }: IFormikResetForm
  ): Promise<void> => {
    const isValid = await schema.isValid(values);

    if (isValid) {
      const result = { ...values };
      dispatch(addBook(result));
    }

    resetForm();
  };
  return (
    <Container className="book-form-container">
      <Formik
        initialValues={{
          title: '',
          author: '',
          publishYear: '',
          pagesTotal: '',
        }}
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
            htmlFor="book-form__book-publishYear-input"
            className="book-form__book-publishYear-label"
          >
            <span className="book-form__label-text">
              Publication publishYear
            </span>

            <Field
              name="publishYear"
              type="text"
              id="book-form__book-publishYear-input"
              placeholder="..."
            />
            <span className="book-form__error-message-container">
              <ErrorMessage name="publishYear" />
            </span>
          </label>

          <label
            htmlFor="book-form__book-pagesTotal-input"
            className="book-form__book-pagesTotal-label"
          >
            <span className="book-form__label-text">Amount of pages</span>

            <Field
              name="pagesTotal"
              type="text"
              id="book-form__book-pagesTotal-input"
              placeholder="..."
            />
            <span className="book-form__error-message-container">
              <ErrorMessage name="pagesTotal" />
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
