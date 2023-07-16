import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  margin-bottom: 36px;
  h3 {
    color: #898f9f;
    margin-bottom: 9px;
    text-align: center;
  }

  .timer-body {
    display: flex;
    gap: 28px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 8px;
    background: #fff;
    box-shadow: 4px 4px 8px 0px rgba(36, 42, 55, 0.15);
    width: min(100%, 280px);
    align-items: center;
    justify-content: center;
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
