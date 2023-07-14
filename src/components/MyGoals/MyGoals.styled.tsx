import styled from '@emotion/styled';

export const Container = styled.div`
  width: min-content(100%, 320px);
  background: #fff;
  box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.1);
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    display: flex;
    padding: 20px 42px 28px;
    align-items: start;
    gap: 20px;
  }
  h2 {
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background: #b1b5c2;
    padding: 18px;
    @media screen and (min-width: 768px) and (max-width: 1280px) {
      width: 275px;
    }
  }
  .goals-body {
    display: flex;
    gap: 12px;
    margin: 0 auto;
    padding: ${(props: { isPlanningId: string }) => {
      if (props.isPlanningId) {
        return '32px 30px';
      }
      return '44px 30px';
    }};
    list-style: none;
    @media screen and (min-width: 768px) and (max-width: 1280px) {
      padding: 0;
      width: 324px;
      justify-content: space-evenly;
    }

    .goal {
      width: max(29.58%, 100px);

      .goal__value {
        color: #091e3f;
        font-family: Open Sans;

        font-size: ${(props: { isPlanningId: string }) => {
          if (props.isPlanningId) {
            return '35px';
          }
          return '45px';
        }};
        font-style: normal;
        font-weight: 700;
        line-height: 38px;
        margin-bottom: 14px;

        background: #f5f7fa;
        box-shadow: 4px 4px 8px 0px rgba(36, 42, 55, 0.15);

        display: flex;
        justify-content: center;
        align-items: center;

        aspect-ratio: 1/1;

        @media screen and (min-width: 768px) and (max-width: 1280px) {
          font-size: 40px;
          width: 100px;
          height: 60px;
          aspect-ratio: auto;
          margin-bottom: 4px;
        }
      }

      .books-left__value {
        color: #ff6b08;
      }
      .goal__label {
        color: #898f9f;
        text-align: center;
        font-family: Montserrat;
        font-size: ${(props: { isPlanningId: string }) => {
          if (props.isPlanningId) {
            return '11px';
          }
          return '14px';
        }};
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        @media screen and (min-width: 768px) and (max-width: 1280px) {
          font-size: 11px;
        }
      }
    }
  }
`;
