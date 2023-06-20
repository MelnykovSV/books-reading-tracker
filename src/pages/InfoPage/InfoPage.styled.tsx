import styled from '@emotion/styled';

export const Container = styled.div`
  h2 {
    font-family: 'Abril Fatface';
    font-weight: 400;
    font-size: 34px;
    text-align: center;
    line-height: calc(38 / 34);
    margin-bottom: 32px;
  }
  b {
    font-size: 20px;
    line-height: calc(38 / 20);
    margin-bottom: 14px;
  }

  ul {
    color: #898f9f;
    list-style-position: inside;

    :last-of-type {
      margin-bottom: 60px;
    }

    li {
      margin-bottom: 12px;
    }
  }
  .buttons-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    .login-button {
      cursor: pointer;
      width: 130px;
      padding: 12px;
      text-align: center;
      background-color: white;
      border: 1px solid #000000;
    }
    .register-button {
      cursor: pointer;
      width: 130px;
      padding: 12px;
      text-align: center;
      background-color: #ff6b08;
      color: white;
      /* border: 1px solid #000000; */
      border: none;
    }
  }
`;
