import styled from '@emotion/styled';

export const Container = styled.div`
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;
  }
  h3 {
    font-size: 19px;
    font-weight: 600;
    line-height: calc(23 / 19);
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
      font-size: 19px;
      font-weight: 600;
      line-height: calc(23 / 19);
      margin-bottom: 24px;
    }
  }
  .books-list__body {
    .books-list__header {
      display: none;
    }
    .books-list__main {
      display: flex;
      gap: 16px;
      flex-direction: column;
    }
    @media screen and (min-width: 768px) {
      .books-list__header {
        display: grid;
        justify-content: space-between;
        color: #898f9f;
        font-weight: 500;

        grid-template-columns: 50% 25% 7.1% 14%;
        margin-bottom: 8px;
      }

      .books-list__header.read {
        grid-template-columns: 27.7% 17.5% 5.5% 5.7% 37.5%;
      }
      .books-list__main {
        gap: 8px;
      }
    }
    @media screen and (min-width: 1280px) {
      .books-list__header.read {
        grid-template-columns: 27.7% 20.5% 6.5% 10.7% 28.5%;
      }
    }
  }

  .books-list__body.read {
    .books-list__header {
      grid-template-columns: 27.1% 20% 6.3% 10.5% 27.8%;
      /* .header-rating {
        display: block;
      } */
    }
  }
`;
