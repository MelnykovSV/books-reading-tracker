import styled from '@emotion/styled';
import bg from '../../images/form-bg.jpg';
import bg2x from '../../images/form-bg@2x.jpg';

import { IStyledProps } from '../../interfaces';

export const Container = styled.div<IStyledProps>`
  @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
    display: flex;
    align-items: center;
    padding-top: 64px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: ${props => props.theme.sizes.desktop}) {
    min-height: 790px;
  }
  form {
    margin: 0 auto;
    display: block;
    width: min(100%, 320px);
    padding: 32px 20px;
    background: linear-gradient(
        to right,
        ${props => props.theme.colors.transparent.formBg},
        ${props => props.theme.colors.transparent.formBg}
      ),
      url(${bg});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: linear-gradient(
          to right,
          ${props => props.theme.colors.transparent.formBg},
          ${props => props.theme.colors.transparent.formBg}
        ),
        url(${bg2x});
    }

    @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
      width: 400px;
      background: none;
      background-color: ${props => props.theme.colors.bg.primary};
    }

    .google-button {
      cursor: pointer;
      display: block;
      width: 150px;
      padding: 11px 14px;
      display: flex;
      gap: 16px;
      align-items: center;
      background-color: ${props => props.theme.colors.bg.primary};
      border: none;
      margin: 0 auto;
      margin-bottom: 28px;

      @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
        background: ${props => props.theme.colors.bg.secondary};
        box-shadow: 0px 2px 2px rgba(9, 30, 63, 0.15);
      }
    }

    label {
      display: block;
      width: 100%;
      margin-bottom: 20px;
      color: ${props => props.theme.colors.bg.primary};
      @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
        color: ${props => props.theme.colors.text.secondaryDark};
      }
      input {
        display: block;
        width: 100%;
        margin-bottom: 8px;
        font-weight: 400;
        padding: 13px 8px;

        @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
          background: ${props => props.theme.colors.bg.secondary};
          box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
          border: none;
        }
      }
      .registration-form__input-label {
        display: block;
        margin-bottom: 8px;
        span {
          color: ${props => props.theme.colors.bg.accentDark};
        }
      }
      .registration-form__error-message-container {
        display: block;
        color: ${props => props.theme.colors.bg.accentDark};
      }
    }
    .registration-form__submit-button {
      cursor: pointer;
      display: block;
      font-weight: 600;
      font-size: 16px;
      line-height: calc(20 / 16);
      text-align: center;
      color: ${props => props.theme.colors.bg.primary};
      background-color: ${props => props.theme.colors.bg.accent};
      border: none;
      width: 100%;
      height: 60px;
      margin-bottom: 20px;
    }

    .registration-form__redirrect {
      font-weight: 500;
      font-size: 13px;
      line-height: calc(16 / 13);
      text-align: center;
      color: ${props => props.theme.colors.text.secondaryDark};

      a {
        color: ${props => props.theme.colors.bg.accent};
      }
    }
  }
`;
