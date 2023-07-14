import styled from '@emotion/styled';
import { IStyledProps } from '../../interfaces';

export const Container = styled.div<IStyledProps>`
  background-color: #f6f7fb;
  .table-body {
    height: 186px;
    overflow-y: auto;

    @media screen and (min-width: 1280px) {
      height: 121px;
    }
  }

  .MuiTableCell-head {
    background-color: #f6f7fb;
    padding-left: 0;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #898f9f;
    line-height: normal;
  }
  .MuiTableCell-body {
    padding-left: 0;
    padding-top: 11px;
    padding-bottom: 11px;
    padding: 0;
    line-height: normal;
  }
  .MuiTableRow-root:first-of-type .MuiTableCell-body {
    /* padding-top: 20px; */
  }

  .MuiTableCell-body:not(:last-of-type) {
    padding-right: 30px;
  }
  .MuiTableCell-body:last-of-type {
    padding-right: 10px;
  }
  .MuiTableRow-root {
    border-bottom: 1 solid red;
  }
  .title-container {
    display: flex;
    align-items: center;
    gap: 14px;

    max-width: 370px;

    @media screen and (min-width: 1280px) {
      max-width: 470px;
    }

    min-width: 0;
    p {
      min-width: 0;
      @media screen and (min-width: 768px) and (max-width: 1279px) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @supports (-webkit-line-clamp: 2) {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: initial;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }

      @media screen and (min-width: 1280px) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    svg {
      min-width: 22px;
    }
  }

  .author-container {
    max-width: 130px;

    @media screen and (min-width: 1280px) {
      max-width: 170px;
    }

    /* min-width: 0; */

    p {
      min-width: 0;
      @media screen and (min-width: 768px) and (max-width: 1279px) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @supports (-webkit-line-clamp: 2) {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: initial;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }

      @media screen and (min-width: 1280px) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .last-row {
    height: 62px;
    display: block;
    @media screen and (min-width: 1280px) {
      height: 37px;
    }
    .title-container {
      padding-top: 22px;
      padding-bottom: 23px;
      @media screen and (min-width: 1280px) {
        padding-top: 10px;
        padding-bottom: 11px;
      }
    }
  }

  .book-icon {
    fill: #a6abb9;
  }
  .delete-button {
    position: absolute;
    top: 20px;
    right: 7px;

    cursor: pointer;

    width: 32px;
    height: 32px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background-color: #f6f7fb;
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
`;
