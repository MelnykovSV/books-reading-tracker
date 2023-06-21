import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  padding: 20px 40px 32px 54px;
  background-color: white;

  @media screen and (min-width: 768px) {
    align-items: center;
    justify-content: space-between;
    display: grid;
    grid-template-columns: 45% 6.5% 42.5% 2% 4%;
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
        /* width: 124px; */
        /* text-overflow: ellipsis; */
      }
    }
    svg {
      position: absolute;
      display: block;
      top: 2px;
      left: -34px;
      min-width: 22px;

      @media screen and (min-width: 768px) {
        position: static;
      }
    }
  }
  .single-book__list {
    grid-column: 3;
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 60% 5% 15% 7% 13%;
      align-items: center;
      margin-bottom: 0;
      .author {
        grid-column: 1;
      }
      .year {
        grid-column: 3;
      }
      .pages {
        grid-column: 5;
      }
    }

    @media screen and (min-width: 1280px) {
      grid-template-columns: 60% 4% 16% 5% 15%;
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
  .single-book__resume-button {
    cursor: pointer;
    display: block;
    margin-left: 18px;
    width: 127px;
    padding: 11px;
    background-color: #6d7a8d;
    color: white;
    border: none;
  }

  .single-book__delete-button {
    position: absolute;
    top: 20px;
    right: 7px;

    cursor: pointer;
    display: block;
    width: 25px;
    height: 25px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
      position: static;
      grid-column: 5;
      justify-self: right;
    }
  }
`;
