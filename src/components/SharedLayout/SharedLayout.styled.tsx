import styled from '@emotion/styled';

export const Container = styled.div`
  header {
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

    .header-body {
      position: relative;
      display: flex;
      justify-content: center;

      align-items: start;
      padding-top: 17px;
      padding-bottom: 17px;
      /* padding: 17px 0; */

      @media screen and (min-width: 768px) {
        justify-content: space-between;
      }
      .logo {
        font-family: 'Abril Fatface';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
        text-decoration: none;
        /* identical to box height */

        color: #242a37;
      }
    }
  }
`;
