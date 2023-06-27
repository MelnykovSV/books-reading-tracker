import styled from '@emotion/styled';
import { IStyledProps } from '../../interfaces';

export const Container = styled.div<IStyledProps>`
  background-color: ${props => props.theme.colors.text.secondary};
  padding-bottom: 100px;
`;
