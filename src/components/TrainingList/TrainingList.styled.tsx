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
    line-height: normal;
  }
  .MuiTableRow-root:first-of-type .MuiTableCell-body {
    padding-top: 20px;
  }
  .MuiTableCell-body:first-of-type {
    display: flex;
    align-items: center;
    gap: 21px;
  }
`;
