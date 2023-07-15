import styled from '@emotion/styled';
import { IStyledProps } from '../../interfaces';

export const Container = styled.form<IStyledProps>`
  h2 {
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background: #b1b5c2;
    padding: 18px;

    margin-bottom: 20px;
  }
  .date-input-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;

    .datepicker {
      width: 100%;
    }
    @media screen and (min-width: 768px) {
      flex-direction: row;
      .datepicker {
        width: 250px;
      }
    }
    @media screen and (min-width: 1280px) {
      gap: 44px;
      justify-content: center;
      .datepicker {
        width: 250px;
      }
    }
  }

  .books-input-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;

    .books-autocomplete {
      /* width: min(100%, 483px); */
      width: 100%;
      background-color: white;

      & .MuiInputBase-input {
        /* height: 0; */
      }
    }
    .button-add {
      cursor: pointer;
      width: 171px;
      padding: 10px;
      background-color: #f6f7fb;
    }
    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 40px;
    }
    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 40px;
    }
  }
  .button-submit {
    display: block;
    cursor: pointer;
    margin: 32px auto;

    width: 171px;
    padding: 12px;
    background: #ff6b08;
    color: #fff;
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;

    @media screen and (min-width: 768px) {
      margin: 40px auto;
    }
  }
`;
