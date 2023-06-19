import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: end;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
  .user__label {
    position: static;
    display: flex;
    gap: 12px;
    align-items: center;

    @media screen and (min-width: 768px) {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .user__icon-container {
      width: 33px;
      height: 33px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f5f7fa;
      border-radius: 50%;
      .user__icon {
        display: block;
        text-transform: capitalize;

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: calc(17 / 14);

        color: #242a37;
      }
    }
    .user__name {
      display: none;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: calc(17 / 14);
      color: #242a37;
      @media screen and (min-width: 768px) {
        display: block;
      }
    }
  }

  nav {
    display: flex;
    gap: 7px;
    position: relative;

    margin-right: 8px;

    @media screen and (min-width: 768px) {
      margin-right: 0;
    }

    ::after {
      content: '';
      position: relative;
      position: absolute;
      top: 0;
      right: -8px;
      display: block;
      height: 100%;
      width: 1px;
      background-color: #e0e5eb;
    }

    a {
      width: 33px;
      height: 33px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      transition: background-color 0.3s linear;
      &.active {
        background-color: #f5f7fa;
      }
    }

    @media screen and (min-width: 768px) {
    }
  }
  button {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: calc(28 / 14);
    text-decoration-line: underline;
    color: #242a37;
    text-decoration: underline;

    border: none;
    background-color: transparent;
    cursor: pointer;
    display: block;
    padding: 0;
  }
`;
