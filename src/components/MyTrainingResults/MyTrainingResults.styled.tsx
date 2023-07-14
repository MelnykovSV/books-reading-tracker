import styled from '@emotion/styled';

export const Container = styled.div`
  width: 280px;
  padding: 20px;
  background: #fff;
  box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.1);
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 100%;
    padding: 28px 96px 32px;
  }

  .MuiInputBase-input {
    box-sizing: border-box;
  }
  h2 {
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 12px;
    text-align: center;
  }

  form {
    display: flex;
    gap: 24px;
    flex-direction: column;
    margin-bottom: 34px;

    @media screen and (min-width: 768px) and (max-width: 1279px) {
      flex-direction: row;
      gap: 32px;
      align-items: end;
      margin-bottom: 24px;
    }

    label {
      font-size: 11px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: #898f9f;
    }
    .input-container {
      display: grid;
      width: 240px;
      /* gap: 20px; */

      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
    }
    button {
      cursor: pointer;
      width: 240px;
      color: #fff;
      text-align: center;
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      background-color: #ff6b08;
      padding: 10px;
      border: none;
      /* margin-bottom: 34px; */

      @media screen and (min-width: 768px) and (max-width: 1279px) {
        margin-bottom: 0;
      }
    }
  }

  .results-container {
    position: relative;
    height: 103px;
    width: 240px;

    :before {
      content: '';
      position: absolute;
      top: 5px;
      height: 1px;
      width: 100%;
      background-color: #e0e5eb;
      z-index: 1;
    }
    h3 {
      position: relative;
      text-align: center;
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
      z-index: 10;
      background-color: white;
      padding-left: 12px;
      padding-right: 12px;
      margin-bottom: 4px;

      @media screen and (min-width: 768px) and (max-width: 1279px) {
        margin-left: 0;
        margin-right: auto;
        padding-left: 0;
        padding-right: 8px;
      }
    }
    ul {
      list-style: none;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      /* text-transform: uppercase; */
    }

    .results-list__item {
      display: grid;
      grid-template-columns: 75px 70px 70px;
      column-gap: 10px;
      justify-content: space-between;

      .results-list__item-date {
        line-height: normal;
        text-transform: uppercase;
      }
      .results-list__item-time {
        color: #898f9f;
        line-height: normal;
        text-transform: uppercase;
        text-align: center;
      }
      .results-list__item-pages {
        font-weight: 400;
        line-height: normal;
        color: #242a37;
        text-align: end;
        span {
          color: #898f9f;
        }
      }
    }
  }
`;
