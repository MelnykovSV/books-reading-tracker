import styled from '@emotion/styled';
import { IStyledProps } from '../../interfaces';

export const Container = styled.div<IStyledProps>`
  background-color: ${props => props.theme.colors.text.secondary};
  padding-bottom: 100px;
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
