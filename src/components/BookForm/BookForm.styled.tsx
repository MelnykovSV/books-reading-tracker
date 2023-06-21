import styled from '@emotion/styled';

export const Container = styled.div`
  form {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-top: 12px;
    column-gap: 32px;

    @media screen and (min-width: 1280px) {
      display: flex;
      align-items: start;
      gap: 16px;
      height: 147px;
      padding-top: 40px;
    }

    .book-form__close-button {
      cursor: pointer;
      border: none;
      background-color: ${props => props.theme.colors.text.secondary};
      height: 36px;
      margin-bottom: 20px;
      width: fit-content;
      svg {
        display: block;
      }

      @media screen and (min-width: 768px) {
        display: none;
      }
    }
    label {
      grid-column: span 4;

      @media screen and (max-width: 1279px) {
        margin-bottom: 20px;
        :last-of-type {
          margin-bottom: 40px;
        }
      }

      @media screen and (min-width: 768px) {
        grid-column: span 1;
        :first-of-type {
          grid-column: span 4;
        }
        :nth-of-type(2) {
          grid-column: span 2;
        }
      }
      .book-form__label-text {
        display: block;
        margin-bottom: 8px;
        color: #898f9f;
      }

      input {
        display: block;
        width: 100%;

        border: 1px solid #a6abb9;
        background-color: #f6f7fb;
        padding: 12px;
      }
      .book-form__error-message-container {
        color: ${props => props.theme.colors.bg.accentDark};
      }
    }

    @media screen and (min-width: 1280px) {
      .book-form__book-title-label {
        width: 346px;
      }
      .book-form__book-author-label {
        width: 250px;
      }
      .book-form__book-publishYear-label,
      .book-form__book-pagesTotal-label {
        width: 134px;
      }
    }

    .add-book-button {
      grid-column: span 4;
      display: block;
      color: #000000;
      width: 171px;
      padding: 12px;
      margin: 0 auto;
      border-radius: none;
      @media screen and (min-width: 1280px) {
        margin: 0;
        width: 181px;
        margin-left: 32px;
        margin-top: 25px;
      }
    }
  }
`;
