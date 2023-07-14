import styled from '@emotion/styled';

export const Container = styled.div`
  background: #f5f7fa;

  display: grid;
  grid-template-columns: 100%;

  @media screen and (min-width: 1280px) {
    grid-template-columns: 928px 288px;
    column-gap: 32px;
    row-gap: 40px;
  }
`;
