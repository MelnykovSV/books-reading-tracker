import styled from '@emotion/styled';

export const Container = styled.li`
  width: 100%;

  padding: 20px 20px 20px 0;
  border-bottom: 1px #e0e5eb solid;
  .single-training-book__title-container {
    display: flex;
    align-items: center;
    gap: 19px;
    margin-bottom: 12px;
    h3 {
      color: var(--deep-blue, #242a37);
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
  .single-training-book__list {
    color: var(--deep-blue, #242a37);
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    display: grid;
    padding-left: 34px;
    grid-template-columns: 60px 1fr;
    row-gap: 14px;
    column-gap: 20px;

    .single-training-book__list-term {
      color: #898f9f;
    }
  }

  &.registration {
    .single-training-book__title-container {
      svg {
        fill: #a6abb9;
      }
      .single-training-book__delete-button {
        /* position: absolute;
        top: 20px;
        right: 7px; */
        margin-left: auto;

        cursor: pointer;

        width: 35px;
        height: 35px;

        display: flex;
        justify-content: center;
        align-items: center;

        border: none;
        background-color: #f5f7fa;
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
      }
    }
    .single-training-book__list {
      padding-left: 40px;
    }
  }
`;
