import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  padding: 20px 50px 32px 54px;
  background-color: white;
  box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.1);

  ///OUTER

  @media screen and (min-width: 768px) {
    align-items: center;
    justify-content: space-between;
    display: grid;
    grid-template-columns: 45% 6.5% 42.5% 2% 4%;
    padding: 11px 20px;
    height: 61px;

    &.read {
      grid-template-columns: 26% 2.5% 50% 2.5% 12% 1% 6%;
    }
  }

  @media screen and (min-width: 1280px) {
    &.read {
      grid-template-columns: 22% 6.5% 52% 2% 12.5% 1% 4%;
    }
  }

  ///OUTER end

  .single-book__title-container {
    margin-bottom: 27px;
    position: relative;
    .single-book__icon {
      fill: #a6abb9;
    }

    .single-book__icon.reading-now {
      fill: #ff6b08;
    }

    @media screen and (min-width: 768px) {
      display: flex;
      gap: 18px;
      align-items: center;
      margin-bottom: 0;
      .single-book__title-text {
        max-width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
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

    ///INNER
    .rating-container {
      grid-column: 7;
      .rating {
        width: 101px;
        height: 20px;
        background-color: green;
      }
    }

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

      &.read {
        grid-template-columns: 36% 2% 15% 2% 13% 2% 32%;

        .rating-container {
          grid-column: 7;
          .rating {
            width: 97px;
            height: 20px;
            background-color: green;
          }
        }
      }
    }

    @media screen and (min-width: 1280px) {
      grid-template-columns: 60% 4% 16% 5% 15%;
      &.read {
        grid-template-columns: 40% 4% 11% 5% 19% 5% 18%;

        .rating-container {
          grid-column: 7;
          .rating {
            width: 101px;
            height: 20px;
            background-color: green;
          }
        }
      }
    }

    ///INNER END
    .single-book__list-item {
      display: grid;
      column-gap: 10px;
      grid-template-columns: 71px 1fr;
      dd {
        max-width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

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

    @media screen and (min-width: 768px) {
      width: 80px;
      margin-left: 0;
      grid-column: 5;
    }

    @media screen and (min-width: 1280px) {
      width: 127px;
      margin: 0 auto;
    }
  }

  .single-book__delete-button {
    position: absolute;
    top: 20px;
    right: 7px;

    cursor: pointer;

    width: 38px;
    height: 38px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background-color: white;
    transition: background-color 0.3s linear;
    border-radius: 50%;

    svg {
      display: block;
      transition: fill 0.3s linear;
      fill: #a6abb9;
    }
    &:hover,
    &:focus {
      background-color: #a6abb9;
      svg {
        fill: white;
      }
    }

    @media screen and (min-width: 768px) {
      position: static;
      grid-column: 5;
      justify-self: right;
    }
  }

  &.read .single-book__delete-button {
    position: absolute;
    top: 20px;
    right: 15px;

    cursor: pointer;

    width: 38px;
    height: 38px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background-color: white;
    transition: background-color 0.3s linear;
    &:hover,
    &:focus {
      background-color: #a6abb9;
      svg {
        fill: white;
      }
    }

    @media screen and (min-width: 768px) {
      position: static;
      grid-column: 7;
      justify-self: right;
      margin: 0;
      margin-left: auto;
    }
    @media screen and (min-width: 1280px) {
      position: static;
      grid-column: 7;
      justify-self: right;
      margin: 0 auto;
    }
  }
`;
