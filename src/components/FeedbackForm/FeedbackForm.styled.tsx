import styled from '@emotion/styled';

export const Container = styled.form`
  /* svg {
    opacity: 1 !important;
  } */
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  display: block;

  background-color: #fff;
  box-shadow: 10px 10px 20px 0px rgba(9, 30, 63, 0.2);
  width: min(280px, 100%);
  margin: 0 auto;
  padding: 20px 20px 40px;

  @media screen and (min-width: 768px) {
    width: min(608px, 100%);
  }

  .form-label {
    display: block;
    color: var(--deep-blue, #242a37);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 12px;
  }

  .rating {
    margin-bottom: 20px;
  }

  .feedback-textarea {
    margin-bottom: 28px;
  }

  textarea {
    padding: 8px;
    display: block;
    resize: none;
    width: 100%;
    border: 1px solid #a6abb9;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    height: 170px;
  }
  .buttons-container {
    display: flex;
    gap: 16px;
    justify-content: center;
    @media screen and (min-width: 768px) {
      gap: 28px;
    }
    .form-button {
      cursor: pointer;
      min-width: 97px;
      padding: 12px;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;

      @media screen and (min-width: 768px) {
        min-width: 130px;
      }
    }
    .button-back {
      border: 1px solid var(--deep-blue, #242a37);
    }
    .button-save {
      border: none;
      color: white;
      background: #ff6b08;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    }
  }
`;
