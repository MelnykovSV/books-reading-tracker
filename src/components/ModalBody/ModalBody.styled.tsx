import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(280px, 100%);
  background: #fff;
  box-shadow: 10px 10px 20px 0px rgba(9, 30, 63, 0.2);
  padding: 44px;

  @media screen and (min-width: 768px) {
    width: min(394px, 100%);
    padding: 40px 29px 48px;
  }

  svg {
    fill: #a6abb9;
    margin: 0 auto;
    display: block;
    margin-bottom: 14px;
  }

  &.success,
  &.book-read {
    svg {
      fill: #ff6b08;
    }
  }
  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    width: 130px;
    margin: 0 auto;
    margin-bottom: 14px;
    text-align: center;
    @media screen and (min-width: 768px) {
      width: 289px;
      margin-bottom: 25px;
    }
  }
  .buttons-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      margin: 0;
    }
  }
  button {
    cursor: pointer;
    display: block;
    margin: 0 auto;
    padding: 11px;
    min-width: 130px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: 1px solid #000;
    background-color: white;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    @media screen and (min-width: 768px) {
      min-width: 152px;
    }
  }
  .button-accent {
    color: white;
    border: none;
    background: #ff6b08;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
