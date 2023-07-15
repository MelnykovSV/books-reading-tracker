import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #f6f7fb;
  .table-body {
    overflow-y: auto;
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
    line-height: normal;
  }
  .MuiTableRow-root:first-of-type .MuiTableCell-body {
    padding-top: 20px;
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

  tr {
    overflow: hidden;
    height: 14px;
    white-space: nowrap;
  }
  td {
    height: 14px;
  }
`;
