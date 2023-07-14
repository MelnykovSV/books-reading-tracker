import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  width: fit-content;
  margin-bottom: 36px;
  h3 {
    color: #898f9f;
    margin-bottom: 9px;
    text-align: center;
  }

  .timer-body {
    display: flex;
    gap: 28px;
    padding-left: 45px;
    padding-right: 45px;
    padding-bottom: 8px;
    background: #fff;
    box-shadow: 4px 4px 8px 0px rgba(36, 42, 55, 0.15);
    width: fit-content;
    .timer-body__item {
      position: relative;
      &:not(:last-of-type)::after {
        content: ':';
        position: absolute;
        right: -18px;
        top: 0;

        color: #091e3f;
        text-align: center;
        font-family: Open Sans;
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: 38px; /* 152% */
      }
      .timer-body__value {
        color: #091e3f;
        text-align: center;
        font-family: Open Sans;
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: 38px; /* 152% */
      }
      .timer-body__label {
        color: #898f9f;
        text-align: center;
        font-family: Montserrat;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
  }
`;
