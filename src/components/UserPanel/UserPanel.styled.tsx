import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: end;
  .user__label {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 12px;
    align-items: center;

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
        /* identical to box height */

        /* deep blue */

        color: #242a37;
      }
    }
    .user__name {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: calc(17 / 14);

      color: #242a37;
    }
  }

  nav {
    display: flex;
    gap: 7px;
    margin-right: 409px;
    a {
      width: 33px;
      height: 33px;
      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 50%;

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
