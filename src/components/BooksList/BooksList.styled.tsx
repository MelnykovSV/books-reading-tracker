import styled from '@emotion/styled';

export const Container = styled.div`
  .books-list__body {
    .books-list__header {
      display: none;
    }
    @media screen and (min-width: 768px) {
      .books-list__header {
        display: grid;
        justify-content: space-between;
        /* 
        grid-template-columns: 50% 30% 7.1% 8%; */

        grid-template-columns: 50% 25% 7.1% 14%;

        .header-rating {
          display: none;
        }
      }
    }

    .books-list__main {
    }
  }

  .books-list__body.read {
    .books-list__header {
      grid-template-columns: 27.1% 20% 6.3% 10.5% 27.8%;
      .header-rating {
        display: block;
      }
    }
  }
`;
