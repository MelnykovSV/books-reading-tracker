import styled from '@emotion/styled';
import bg from '../../images/form-bg.jpg';
import bg2x from '../../images/form-bg@2x.jpg';

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
  form {
    margin: 0 auto;
    display: block;
    width: min(100%, 320px);
    padding: 32px 20px;
    /* background-color: gray; */
    background: linear-gradient(
        to right,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${bg});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: linear-gradient(
          to right,
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${bg2x});
    }

    @media screen and (min-width: 768px) {
      width: 400px;

      background: none;
      background-color: #ffffff;
    }

    .google-button {
      cursor: pointer;
      display: block;
      width: 150px;
      padding: 11px 14px;
      display: flex;
      gap: 16px;
      align-items: center;
      background-color: white;
      border: none;
      margin: 0 auto;
      margin-bottom: 28px;
    }

    label {
      display: block;
      width: 100%;
      margin-bottom: 20px;
      input {
        display: block;
        width: 100%;
        margin-bottom: 8px;

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: calc(17 / 14);
        padding: 13px 8px;
      }
      .registration-form__input-label {
        display: block;
        margin-bottom: 8px;
        span {
          color: #f25137;
        }
      }
      .registration-form__error-message-container {
        display: block;
      }
    }
    .registration-form__submir-button {
      cursor: pointer;
      display: block;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: calc(20 / 16);
      text-align: center;
      color: #ffffff;
      background-color: #ff6b08;
      border: none;
      width: 100%;
      height: 60px;
      margin-bottom: 20px;
    }

    .registration-form__redirrect {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: calc(16 / 13);
      text-align: center;
      color: #898f9f;

      a {
        color: #ff6b08;
      }
    }
  }
`;
