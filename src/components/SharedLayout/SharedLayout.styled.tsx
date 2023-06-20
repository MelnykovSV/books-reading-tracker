import styled from '@emotion/styled';

export const Container = styled.div`
  header {
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

    .header-body {
      position: relative;
      display: flex;

      justify-content: space-between;

      align-items: start;
      padding-top: 17px;
      padding-bottom: 17px;

      .logo {
        font-family: 'Abril Fatface';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
        text-decoration: none;

        color: #242a37;

        :last-child {
          margin: 0 auto;
          @media screen and (min-width: 768px) {
            margin: 0 0 0 32px;
          }
          @media screen and (min-width: 1280px) {
            margin: 0 0 0 16px;
          }
        }
      }
    }
  }
`;
