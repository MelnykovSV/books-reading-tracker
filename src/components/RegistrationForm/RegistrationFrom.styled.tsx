import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #ffffff;
  width: min(100%, 320px);
  padding: 32px 20px;
  background-color: gray;

  .google-button {
    display: block;
    width: 150px;
    /* height: 40px; */
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
    }
  }
`;
