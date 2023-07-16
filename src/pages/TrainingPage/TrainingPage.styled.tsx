import styled from '@emotion/styled';

export const Container = styled.div`
  background: #f5f7fa;

  display: grid;
  grid-template-columns: 100%;
  align-items: start;
  padding-top: 32px;
  padding-bottom: 49px;
  row-gap: 20px;

  @media screen and (min-width: 768px) {
    /* column-gap: 32px; */
    row-gap: 32px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 928px 288px;
    column-gap: 32px;
    row-gap: 40px;
    align-items: stretch;
  }

  .responsive-container {
    /* margin-left: -30px; */
    margin-right: -300px;
    background-color: white;

    @media screen and (min-width: 768px) {
      height: 340px;
    }
  }

  .recharts-label-list > text {
    position: relative;
    display: block;
    z-index: 100;
    padding: 7px;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    background-color: #f5f7fa;
    box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.1);
    &:not(:last-of-type) {
      display: none;
    }
  }
  .recharts-label-list > rect {
    filter: drop-shadow(0px 2px 3px 0px rgba(9, 30, 63, 0.1));
    &:not(:last-of-type) {
      display: none;
    }
  }
  .line-for-labels-coordinates-calculation {
    display: none;
  }

  .custom-tooltip {
    background-color: #f5f7fa;
    box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.1);
    padding: 10px;
    .custom-tooltip__date {
      display: block;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 10px;
    }

    .line-actual {
      .recharts-line-curve {
        filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.9));
        .recharts-line-curve {
          filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.9));
        }
      }
    }

    .rechart-surface {
      filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.9));
    }

    .custom-tooltip__list {
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      list-style: none;
      text-transform: capitalize;
      .custom-tooltip__list-item:not(:last-child) {
        margin-bottom: 8px;
      }

      .actual {
        color: #ff6b08;
      }

      .plan {
        color: #091e3f;
      }
    }
  }
  .recharts-line {
    path {
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  }
  .recharts-yAxis,
  .recharts-xAxis {
    line {
      stroke: rgb(204, 204, 204);
    }
  }
  .recharts-label {
    transform: translateY(-5px);
    tspan {
      fill: #091e3f;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
    }
  }

  .my-training-container {
    & > div:not(last-of-type) {
      margin-bottom: 20px;
    }
  }

  .form-open-button {
    cursor: pointer;
    position: fixed;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: #ff6b08;

    border: none;
    z-index: 10;
    svg {
      fill: #ffffff;
    }
  }
`;
