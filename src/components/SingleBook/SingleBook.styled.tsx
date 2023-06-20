import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px 20px 32px 54px;
  background-color: white;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 20px;
  }

  .single-book__title-container {
    margin-bottom: 27px;
    position: relative;
    @media screen and (min-width: 768px) {
      display: flex;
      gap: 18px;
      align-items: center;
      margin-bottom: 0;
      .single-book__title-text {
        width: 124px;
        /* text-overflow: ellipsis; */
      }
    }
    svg {
      position: absolute;
      display: block;
      top: 2px;
      left: -34px;

      @media screen and (min-width: 768px) {
        position: static;
      }
    }
  }
  .single-book__list {
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 28px;
      margin-bottom: 0;
    }
    .single-book__list-item {
      display: grid;
      column-gap: 10px;
      grid-template-columns: 71px 1fr;

      :not(:last-child) {
        margin-bottom: 14px;
      }
      @media screen and (min-width: 768px) {
        display: block;
        margin: 0;
        :not(:last-child) {
          margin-bottom: 0;
        }
      }
      @media screen and (min-width: 768px) {
        .single-book__list-term {
          display: none;
        }
      }
    }
  }
  button {
    cursor: pointer;
    display: block;
    margin-left: 18px;
    width: 127px;
    padding: 11px;
    background-color: #6d7a8d;
    color: white;
    border: none;
  }
`;
